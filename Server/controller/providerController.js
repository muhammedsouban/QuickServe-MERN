import jwt from 'jsonwebtoken'
import Service from "../models/serviceModel.js";
import Provider from '../models/providerModel.js';
import Booking from '../models/bookingModel.js'
import User from '../models/userModel.js'

import bcrypt from 'bcrypt'
import mongoose from 'mongoose';

const securePassword = async (password) => {
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        return passwordHash;
    } catch (error) {
        console.log(error.message);
    }
}
export const registerProvider = async (req, res) => {
    try {
        const { username, email, phone, location, pincode, address, password, category, experience, availability, languages, description } = req.body;
        const imageUrl = req.file.filename
        const userData = await Provider.findOne({ email: req.body.email });
        if (!userData) {
            const secretPassword = await securePassword(password);
            const provider = new Provider({
                providername: username,
                email: email,
                phone: phone,
                location: location,
                address: address, language: languages,
                category: category, availability: availability,
                pincode: pincode, experience: experience,
                image: imageUrl, jobdescription: description,
                password: secretPassword,
            });
            const ProviderData = await provider.save();
            res.json(ProviderData);
            console.log(ProviderData);
        } else {
            res.json({ message: "Email already taken" });
        }
    } catch (error) {
        console.log(error);
    }
}

export const providerLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const provider = await Provider.findOne({ email: email });
        console.log(req.body);
        if (provider) {
            if (!provider.isApproved) {
                return res.json({ message: "Account not approved. Please contact the administrator." });
            }
            if (provider.isBlock) {
                return res.json({ message: "Account blocked. Please contact the administrator." });
            }
            const passwordMatch = await bcrypt.compare(password, provider.password);
            if (passwordMatch) {
                const token = jwt.sign({ email: provider.email, id: provider._id, role: 'provider' }, process.env.JWT_SECRET_KEY);
                return res.json({ message: "Login Success", token, email: provider.email, id: provider._id });
            } else {
                return res.json({ message: "Wrong password" });
            }
        } else {
            return res.json({ message: "Wrong Email" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const sendBookingRequest = async (req, res) => {
    try {
        const provider = await Provider.findById(req.provider.id);
        const providerCategory = provider.category;

        const BookingRequests = await Booking.aggregate([
            {
                $unwind: "$services"
            },
            {
                $lookup: {
                    from: "services",
                    localField: "services.serviceId",
                    foreignField: "_id",
                    as: "serviceData"
                }
            },
            {
                $unwind: "$serviceData"
            },
            {
                $match: {
                    "serviceData.category": providerCategory,
                    "services.providerId": { $exists: false }
                }
            },
            {
                $group: {
                    _id: "$_id",
                    bookingId: { $first: "$_id" },
                    services: {
                        $push: {
                            serviceId: "$services.serviceId",
                            qty: "$services.qty",
                            serviceData: "$serviceData"
                        }
                    },
                    user: { $first: "$user" },
                    addressId: { $first: "$addressId" },
                    date: { $first: "$date" },
                    startTime: { $first: "$startTime" },
                }
            },
            {
                $project: {
                    _id: 0,
                    bookingId: 1,
                    services: 1,
                    user: 1,
                    addressId: 1,
                    date: 1,
                    startTime: 1,
                }
            }
        ]);
        res.json(BookingRequests);

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "An error occurred" });
    }
};



export const acceptRequest = async (req, res) => {
    try {
      const services = req.body.data.services;
      const bookingId =new mongoose.Types.ObjectId(req.body.data.bookingId);
      const serviceIds = services.map((item) =>new mongoose.Types.ObjectId(item.serviceId));
      const providerId =new mongoose.Types.ObjectId(req.provider.id);
  
      const booking = await Booking.findByIdAndUpdate(
        bookingId,
        { $set: { 'services.$[elem].providerId': providerId } },
        { arrayFilters: [{ 'elem.serviceId': { $in: serviceIds } }], new: true }
      );
  
      console.log(booking);
  
      return res.status(200).json({ success: true, message: 'Booking request accepted.' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'Error accepting booking request.' });
    }
  };
  





export const Profile = async (req, res) => {
    try {
        const ProviderData = await Provider.findById(req.provider.id)
        res.json(ProviderData)
    } catch (error) {
        console.log(error);
    }
}
