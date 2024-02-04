import userModels from "../models/userModels";
import { hashPassword } from '../helpers/helper';

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

        const existingUser = await userModels.findOne({email});

        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Register please Login'
            })
        }

        const hashPassword = await hashPassword(password);

        const user = new userModel({name,email,phone,address,password:hashPassword}).save();

        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in Registration',
            error
        })
    }
};
