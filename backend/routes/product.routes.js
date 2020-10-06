import express from "express";
import createProduct from "../controllers/productControllers/createProduct.js";
import getProducts from "../controllers/productControllers/getProducts.js";
import uploadImage from "../controllers/productControllers/uploadImage.js";
import { adminAuth, userAuth } from "../middlewares/auth.js";

const Router = express.Router();

Router.route("/")
	.get(getProducts)
	.post(userAuth, adminAuth, uploadImage, createProduct);

export default Router;
