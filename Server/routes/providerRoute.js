import express from "express";
const providerRoute = express.Router()
import * as providerController from '../controller/providerController.js'
import {verifyToken} from '../middleware/Auth.js'
import { upload } from "../middleware/multer.js";


providerRoute.post('/register',upload.single('image'),providerController.registerProvider)
providerRoute.post('/login',providerController.providerLogin)
export default providerRoute