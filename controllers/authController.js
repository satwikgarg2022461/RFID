import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/helper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  // return "hi";
  console.log("hi");
  try {
    console.log(req.body);
    const {
      fullName,
      shopName,
      address,
      pincode,
      gstNumber,
      contactNumber,
      emailId,
      password,
    } = req.body;
    console.log();
    if (!fullName) {
      return res.send({ error: "Name is Requied" });
    }
    if (!emailId) {
      return res.send({ error: "Email is Requied" });
    }
    if (!password) {
      return res.send({ error: "Password no is Requied" });
    }
    if (!contactNumber) {
      return res.send({ error: "Phone is Requied" });
    }
    if (!address) {
      return res.send({ error: "Address is Requied" });
    }
    if (!shopName) {
      return res.send({ error: "Shopname is Required" });
    }
    if (!gstNumber) {
      return res.send({ error: "gstNumber is Required" });
    }
    if (!contactNumber) {
      return res.send({ error: "contactNumber is Required" });
    }

    const existingUser = await userModel.findOne({ emailId });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register please Login",
      });
    }

    const hashedPassword = await hashPassword(password);



    const user = await new userModel({
      fullName,
      shopName,
      address,
      pincode,
      gstNumber,
      contactNumber,
      emailId,
      password: hashedPassword,
      role: 1
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    console.log(req.body);
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await userModel.findOne({ emailId });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        id: user._id,
        name: user.fullName,
        email: user.emailId,
        phone: user.contactNumber,
        address: user.address,
        role: user.role, // Include the user role in the response
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500)({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send("protected route");
};
