import Admin from "../models/adminModel.js";
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import Service from "../models/serviceModel.js";
import Provider from "../models/providerModel.js";

export const adminLogin = async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email })
        if (admin) {
            const isPasswordValid = admin.password;
            if (isPasswordValid === req.body.password) {
                const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET_KEY)
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

export const EditService = async (req, res) => {
    try {

        const userData = await User.findById({ _id: req.params.id })
        res.json(userData)
    } catch (error) {
        console.log(error);
    }
}

export const UpdateService = async (req, res) => {
    try {

        const { servicename, description, serviceincludes, price, category } = req.body;
        const serviceData = {
            servicename: servicename,
            description: description,
            category: category,
            serviceincludes: serviceincludes,
            price: price,
        };
        if (req.file?.filename) {
            serviceData.image = req.file.filename;
        }
        const ServiceDataUpdate = await Service.findOneAndUpdate({ _id: req.params.serviceId }, {
            $set: serviceData
        })
        res.json(ServiceDataUpdate)
    } catch (error) {
        console.log(error);
    }

}

export const AddService = async (req, res) => {
    try {
        const { servicename, description, serviceincludes, price, category } = req.body;
        const serviceData = {
            servicename: servicename,
            description: description,
            category: category,
            serviceincludes: serviceincludes,
            price: price,
        };
        if (req.file?.filename) {
            serviceData.image = req.file.filename;
        }
        const newService = new Service(serviceData);
        const savedService = await newService.save();
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

export const getProvider = async (req, res) => {
    try {
        const providerData = await Provider.find().lean()
        res.status(200).json(providerData)
    } catch (error) {
        console.log(error);
    }
}

export const blockProvider = async (req, res) => {
    try {
        const providerData = await Provider.findByIdAndUpdate(
            { _id: req.params.providerId },
            { $set: { isBlock: true } })
        res.json(providerData)
        console.log(providerData);
    } catch (error) {
        console.log(error);
    }
}

export const UnBlockProvider = async (req, res) => {
    try {
        const providerData = await Provider.findByIdAndUpdate(
            { _id: req.params.providerId },
            { $set: { isBlock: false } })
        res.json(providerData)
    } catch (error) {
        console.log(error);
    }
}
export const ApproveProvider = async (req, res) => {
    try {
        const providerData = await Provider.findByIdAndUpdate(
            { _id: req.params.providerId },
            { $set: { isApproved: true } }
        );
        if (!providerData) {
            return res.status(404).json({ message: "Provider not found" });
        }
        return res.json(providerData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
