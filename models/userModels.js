import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        reuired: true
    },
    address:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        default: 0
    }
},{timestamps: true}
);

export default mongoose.model('sample',userSchema);