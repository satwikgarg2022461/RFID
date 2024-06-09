import productModel from "../models/productModel.js";
import upload from "../config/multer.js";  // Import multer configuration

export const addProductController = async (req, res) => {
  try {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Image upload failed",
          error: err.message,
        });
      }

      const {
        name,
        description,
        category,
        sub_category,
        style,
        brandName,
        rfid_no,
        barcode,
        price,
      } = req.body;

      if (!name || !category || !sub_category || !style || !brandName || !rfid_no || !barcode || !price) {
        return res.status(400).send({ error: "All fields are required" });
      }

      const newProduct = new productModel({
        name,
        description,
        category,
        sub_category,
        style,
        brandName,
        rfid_no,
        barcode,
        price,
        image: req.file.path,  // Cloudinary image URL
      });

      const savedProduct = await newProduct.save();

      res.status(201).send({
        success: true,
        message: "Product added successfully",
        product: savedProduct,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in adding product",
      error,
    });
  }
};
