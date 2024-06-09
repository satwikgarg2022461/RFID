import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    rfid_no: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    price: {
        type: Number,  // Use Number instead of Integer
        required: true
    },
    image: {
        type: String,  // Store the image URL as a string
        required: true
    }
}, { timestamps: true });

const productModel = mongoose.model('products', productSchema);

export default productModel;
