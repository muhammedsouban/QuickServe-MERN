import Admin from "../models/adminModel.js";
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import Service from "../models/serviceModel.js";
import Provider from "../models/providerModel.js";
import Category from "../models/categoryModel.js";
import City from "../models/cityModel.js";
import Media from "../models/mediaModel.js";
import Booking from "../models/bookingModel.js";
import mongoose from "mongoose";
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageMode.js";

export const adminLogin = async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email })
        if (admin) {
            const isPasswordValid = admin.password;
            if (isPasswordValid === req.body.password) {
                const token = jwt.sign({ email: admin.email, role: 'admin' }, process.env.JWT_SECRET_KEY)
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
        const userData = await User.findByIdAndUpdate({ _id: req.params.userId },
            { $set: { isBlocked: req.body.isBlock } })
        res.status(200).json(userData)

    } catch (error) {
        console.log(error);
    }
}

export const addCity = async (req, res) => {
    try {
        const city = req.body.city
        const cityData = await City.insertMany({ cityName: city })
        res.json(cityData)
    } catch (error) {
        console.log(error);
    }
}

export const cities = async (req, res) => {
    try {
        const cityData = await City.find({ isDelete: false }).lean()
        res.json(cityData)
    } catch (error) {
        console.log(error);
    }
}

export const deleteCity = async (req, res) => {
    try {
        const cityData = await City.findByIdAndUpdate({ _id: req.params.cityId },
            { $set: { isDelete: true } })
        res.json(cityData)
    } catch (error) {

    }
}

export const AddMediaCards = async (req, res) => {
    try {
        const { title } = req.body;

        const fileNames = req.files.map((file) => ({
            image: file.filename,
            _id: new mongoose.Types.ObjectId()
        }));

        const cardData = {
            title: title,
            images: fileNames,
        };

        const updateData = {
            $push: {
                Cards: cardData,
            },
        };
        const Data = await Media.updateMany({}, updateData);

        res.status(200).json({ message: 'media added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const deleteMediaCards = async (req, res) => {
    try {
        const cardId = req.params.id;
        const updateData = {
            $pull: {
                Cards: { _id: cardId },
            },
        };

        const data = await Media.updateMany({}, updateData);

        res.status(200).json({ message: 'Banner deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const addAdvertisement = async (req, res) => {
    try {
        const image = req.file.filename;
        const updateData = {
            $push: {
                Adds: { image: image },
            },
        };

        const data = await Media.updateMany({}, updateData);

        res.status(200).json({ message: 'media added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteAdvertisement = async (req, res) => {
    try {
        const AddId = req.params.id;
        const updateData = {
            $pull: {
                Adds: { _id: AddId },
            },
        };

        const data = await Media.updateMany({}, updateData);

        res.status(200).json({ message: 'Banner deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const addBanner = async (req, res) => {
    try {
        const image = req.file.filename;

        const updateData = {
            $push: {
                banner: { image: image },
            },
        };
        const data = await Media.updateMany({}, updateData);
        res.status(200).json({ message: 'media added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteBanner = async (req, res) => {
    try {
        const bannerId = req.params.id;
        const updateData = {
            $pull: {
                banner: { _id: bannerId },
            },
        };

        const data = await Media.updateMany({}, updateData);
        res.status(200).json({ message: 'Banner deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



export const getMedia = async (req, res) => {
    try {
        const mediaData = await Media.find().lean()
        const data = mediaData[0]
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

export const bookings = async (req, res) => {
    try {
        const Bookingdata = await Booking.aggregate([
            {
                $lookup: {
                    from: 'services',
                    localField: 'services.serviceId',
                    foreignField: '_id',
                    as: 'serviceData'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userData'
                }
            }
        ]).exec();

        res.json(Bookingdata)
    } catch (error) {
        console.log(error);
    }
}

export const AddChat = async (req, res) => {
    try {
        const admin = await Admin.findOne()
        const { message, conversationId } = req.body.data
        const newMessage = new Message({
            sender: admin._id,
            message: message,
            conversationId: conversationId,
        });

        const savedMessage = await newMessage.save();
        res.status(200).json({
            message: savedMessage,
        });
    } catch (error) {
        console.error('Error adding chat:', error);
        res.status(500).json({ error: 'An error occurred while adding the chat.' });
    }
};

export const getChat = async (req, res) => {
    try {
        const chatData = await Conversation.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            {
                $unwind: '$user',
            },
        ]);

        res.json(chatData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve chat data' });
    }
};

export const getConversation = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.userId);
        const messageData = await Conversation.aggregate([
            {
                $match: {
                    user_id: userId,
                },
            },
            {
                $lookup: {
                    from: 'messages',
                    localField: '_id',
                    foreignField: 'conversationId',
                    as: 'messages',
                },
            },
        ]);
        res.json(messageData[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve chat data' });
    }
};
