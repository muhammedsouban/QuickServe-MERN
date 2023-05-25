import express from "express";
const userRoute = express.Router()
import * as userController from '../controller/userController.js'
import {verifyToken} from '../middleware/Auth.js'
import { upload } from "../middleware/multer.js";


userRoute.post('/register',upload.single('image'),userController.insertUser)
userRoute.post('/login',userController.Login)
userRoute.patch('/profile-update',upload.single('image'),verifyToken,userController.UpdateProfile)
userRoute.post('/cart/:serviceId',verifyToken,userController.AddToCart)

export default userRoute