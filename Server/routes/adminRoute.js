import express from "express";
const adminRoute = express.Router()
import * as adminController from '../controller/adminController.js'
import { verifyAdminToken } from '../middleware/Auth.js'
import { upload } from "../middleware/multer.js";

adminRoute.post('/login', adminController.adminLogin)

adminRoute.post('/category', verifyAdminToken, upload.single('image'), adminController.AddCategory)
adminRoute.get('/category', adminController.getCategory)
adminRoute.delete('/category/:Id', verifyAdminToken, adminController.deleteCategory)
adminRoute.get('/category/:Id', verifyAdminToken, adminController.editCategory)
adminRoute.put('/category/:Id', verifyAdminToken, upload.single('image'), adminController.updateCategory)

adminRoute.get('/service', adminController.getServices)
adminRoute.post('/service', verifyAdminToken, upload.single('image'), adminController.AddService)
adminRoute.delete('/service/:serviceId', verifyAdminToken, adminController.DeleteService)
adminRoute.get('/service/:serviceId', adminController.EditService)
adminRoute.put('/service/:serviceId', verifyAdminToken, upload.single('image'), adminController.UpdateService)

adminRoute.get('/providers', verifyAdminToken, adminController.getProvider)
adminRoute.put('/provider-Block/:providerId', verifyAdminToken, adminController.blockProvider)
adminRoute.put('/provider-Unblock/:providerId', verifyAdminToken, adminController.UnBlockProvider)
adminRoute.put('/provider-Approve/:providerId', verifyAdminToken, adminController.ApproveProvider)

export default adminRoute