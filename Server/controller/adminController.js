import Admin from "../models/adminModel.js";
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import Service from "../models/serviceModel.js";
import Provider from "../models/providerModel.js";
import Category from "../models/categoryModel.js";

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

export const AddService = async (req, res) => {
    try {
        console.log(req.body);
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
        const ServiceData = await Service.find({ isDeleted: false }).lean()
        res.status(200).json(ServiceData)
    } catch (error) {
        console.log(error);
    }
}

export const DeleteService = async (req, res) => {
    try {
        const ServiceData = await Service.findByIdAndUpdate({ _id: req.params.serviceId },
            { $set: { isDeleted: true } })
        res.json(ServiceData)
    } catch (error) {
        console.log(error);
    }
}

export const EditService = async (req, res) => {
    try {
        const ServiceData = await Service.findById({ _id: req.params.serviceId })
        res.json(ServiceData)
    } catch (error) {
        console.log(error);
    }
}

export const UpdateService = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params.serviceId);

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


export const AddCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        const { filename: image } = req.file || {};
        const categoryData = new Category({
            categoryName: categoryName,
            image: image,
        });
        await categoryData.save();
        res.status(200).json({ message: 'Category added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCategory = async (req, res) => {
    try {
        const CategoryData = await Category.find({ isDelete: false }).lean()
        res.status(200).json(CategoryData)
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const CategoryData = await Category.findByIdAndUpdate({ _id: req.params.Id },
            { $set: { isDelete: true } })
        res.json(CategoryData)
    } catch (error) {
        console.log(error);
    }
}

export const editCategory = async (req, res) => {
    try {
        const CategoryData = await Category.findById({ _id: req.params.Id })
        res.status(200).json(CategoryData)
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = async (req, res) => {
    try {
        console.log(req.body);
        const categoryData = {
            categoryName: req.body.categoryName,
        };
        if (req.file && req.file.filename) {
            categoryData.image = req.file.filename;
        }
        const categoryDataUpdate = await Category.findOneAndUpdate(
            { _id: req.params.Id },
            { $set: categoryData },
            { new: true }
        );
        res.json(categoryDataUpdate);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to update category' });
    }
};

export const category = async (req, res) => {
    try {
        const CategoryData = await Category.find({ isDelete: false }).lean()
        res.json(CategoryData)
    } catch (error) {
        console.log(error);
    }
}

export const users = async (req, res) => {
    try {
        const userData = await User.find().lean()
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
    }
}
export const handleUserBlock = async (req, res) => {
    try {
            const userData = await User.findByIdAndUpdate({ _id: req.params.userId},
                { $set: { isBlocked: req.body.isBlock } })
            res.status(200).json(userData)
        
    } catch (error) {
        console.log(error);
    }
}