import express from "express";
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requieSignIn } from "../middlewares/authMiddleware.js";
import { addProductController } from "../controllers/productController.js";

const router = express.Router();

router.post('/register',registerController);

router.post('/login',loginController);
router.post('/addproduct',addProductController);

router.get('/test',requieSignIn,isAdmin,testController);

export default router;