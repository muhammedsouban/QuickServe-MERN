import express from "express";
const providerRoute = express.Router()
import * as providerController from '../controller/providerController.js'
import { verifyProviderToken } from '../middleware/Auth.js'
import { upload } from "../middleware/multer.js";


providerRoute.post('/register', upload.single('image'), providerController.registerProvider)
providerRoute.post('/login', providerController.providerLogin)
providerRoute.get('/bookingRequests', verifyProviderToken, providerController.sendBookingRequest)
providerRoute.get('/profile', verifyProviderToken, providerController.Profile)
providerRoute.post('/acceptBooking', verifyProviderToken, providerController.acceptRequest)

export default providerRoute