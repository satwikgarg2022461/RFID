import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from '../helpers/helper.js';
import JWT from "jsonwebtoken";

export const registerController = async (req,res) => {
    // return "hi";
    console.log("hi");
    try {
        
        console.log(req.body);
        // const {name,email,password,phone,address} = req.body;
        // console.log();
        // if(!name){
        //     return res.send({error: 'Name is Requied'});
        // }
        // if(!email){
        //     return res.send({error: 'Email is Requied'});
        // }
        // if(!password){
        //     return res.send({error: 'Password no is Requied'});
        // }
        // if(!phone){
        //     return res.send({error: 'Phone is Requied'});
        // }
        // if(!address){
        //     return res.send({error: 'Address is Requied'});
        // }

        // const existingUser = await userModel.findOne({email});

        // if(existingUser){
        //     return res.status(200).send({
        //         success:true,
        //         message:'Already Register please Login'
        //     })
        // }

        // const hashedPassword = await hashPassword(password);

        // const user = await new userModel({name,email,phone,address,password:hashedPassword,}).save();

        // res.status(201).send({
        //     success:true,
        //     message:'User Register Successfully',
        //     user
        // });
    } catch (error) {
        console.log(error);
        // res.status(500).send({
        //     success:false,
        //     message: 'Error in Registration',
        //     error
        // });
    }
};


export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Email or Password'
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                nam:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },token
        })
    } catch (error) {
        console.log(error);
        res.status(500)({
            success: false,
            message:'Error in Login',
            error
        })
    }
};

export const testController = (req,res) => {
    res.send('protected route');
}