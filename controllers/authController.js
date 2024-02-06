import userModel from "../models/userModels.js";
import { hashPassword } from '../helpers/helper.js';

export const registerController = async (req,res) => {
    try {
        const {name,email,password,phone,address} = req.body;
        if(!name){
            return res.send({error: 'Name is Requied'});
        }
        if(!email){
            return res.send({error: 'Email is Requied'});
        }
        if(!password){
            return res.send({error: 'Password no is Requied'});
        }
        if(!phone){
            return res.send({error: 'Phone is Requied'});
        }
        if(!address){
            return res.send({error: 'Address is Requied'});
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Register please Login'
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await new userModel({name,email,phone,address,password:hashedPassword,}).save();

        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in Registration',
            error
        });
    }
};
