import Admin from "../models/adminModel.js";
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import Service from "../models/serviceModel.js";

export const adminLogin = async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email })
        if (admin) {
            const isPasswordValid = admin.password;
            if (isPasswordValid === req.body.password) {
                const token = jwt.sign({ email: admin.email }, 'myWebAppSecretKey123', { expiresIn: "180000" })
                res.json({ message: "Login Sucess", token, email: admin.email, id: admin._id });
            } else {
                res.json({ message: "Wrong password" });
            }
        } else {
            res.json({ message: "Wrong Email " });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "something went wrong" });
    }
}


export const getUsers = async (req, res) => {
    try {
        const adminData = await User.find().lean()
        res.json(adminData)
    } catch (error) {
        console.log(error);
    }
}

export const DeleteService = async (req, res) => {
    try {
        console.log(req.params.id);
        const ServiceData = await Service.findByIdAndDelete({ _id: req.params.id })
        res.json(ServiceData)
    } catch (error) {
        console.log(error);
    }
}

export const editUser = async (req, res) => {
    try {

        const userData = await User.findById({ _id: req.params.id })
        res.json(userData)
    } catch (error) {
        console.log(error);
    }
}

export const UpdateUser = async (req, res) => {
    try {

        const { username, email, mobile } = req.body
        const updateData = {
            username: username,
            email: email,
            mobile: mobile
        };
        if (req.file?.filename) {
            updateData.image = req.file.filename;
        }
        const userData = await User.findOneAndUpdate({ _id: req.params.id }, {
            $set: updateData
        })
        res.json(userData)
    } catch (error) {
        console.log(error);
    }

}

export const AddService = async (req, res) => {
    try {
        const { servicename, description, serviceincludes, price } = req.body;

        const serviceData = {
            servicename: servicename,
            description: description,
            serviceincludes: serviceincludes,
            price: price,
        };

        if (req.file?.filename) {
            serviceData.image = req.file.filename;
        }

        const newService = new Service(serviceData);
        const savedService = await newService.save();

        console.log(savedService);
        res.status(200).json(savedService);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getServices = async (req, res) => {
    try {
        const ServiceData = await Service.find().lean()
        res.status(200).json(ServiceData)
    } catch (error) {
        console.log(error);
    }
}