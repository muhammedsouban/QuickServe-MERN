import express from "express";
const adminRoute = express.Router()
import * as adminController from '../controller/adminController.js'
import { verifyAdminToken } from '../middleware/Auth.js'
import { upload } from "../middleware/multer.js";



adminRoute.post('/login', adminController.adminLogin)
adminRoute.post('/Add-Service', verifyAdminToken, upload.single('image'), adminController.AddService)
adminRoute.get('/getServices', verifyAdminToken, adminController.getServices)
adminRoute.delete('/deleteService/:id', adminController.DeleteService)
adminRoute.get('/editService/:id', adminController.EditService)
adminRoute.put('/updateService/:serviceId', upload.single('image'), adminController.UpdateService)
adminRoute.get('/getprovider', verifyAdminToken, adminController.getProvider)
adminRoute.put('/block/:providerId', verifyAdminToken, adminController.blockProvider)
adminRoute.put('/unblock/:providerId', verifyAdminToken, adminController.UnBlockProvider)
adminRoute.put('/approve/:providerId', verifyAdminToken, adminController.ApproveProvider)
adminRoute.get('/loadDashboard', adminController.getUsers)

export default adminRoute