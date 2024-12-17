const usermodel=require("../models/usermodel");
const bcrypt=require("bcrypt");
const JWT=require("jsonwebtoken");
//register
const registerController=async(req,res)=>{
    try{
        const{userName,email,password,phone,address}=req.bodyl
         // Validation
         if (!userName || !email || !password || !phone || !address ) {
            return res.status(400).send({
                sucess:false,
                message:"pllease provide all fields",
            });
    }
    const existingUser=await usermodel.findOne({email});
    if(existingUser){
        return res.status(400).send({
            sucess:false,
            message:"email already registered please login",
        });
    }
    const salt=await bcrypt.genSalt(10);
    const HashedPassword=await bcrypt.hash(password,salt);
    const user=await usermodel.create({
        userName,
        email,
        password:HashedPassword,
        address,
        phone,
    });
    res.status(201).send({
        sucess:true,
        message:"registered sucessfully",
        user,
    });
}catch(error){
    console.log(error);
    res.status(500).send({
        sucess:false,
        message:"error in register API",
        error,
    });
}
};
//login
const logincontroller=async(req,res)=>{
    try{
        const{email,password}=req.body;
        //validation
        if(!email || !password){
            return res.status(400).send({
                sucess:false,
                message:"please provide email and password",
            });
        }
        const user=await usermodel.findOne({email});
        if(!user){
            return res.status(404).send({
                sucess:false,
                message:"user not found please register",
            });
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).send({
                sucess:false,
                message:"invalid credentials",
            });
        }
        //generate token
        const token=JWT.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7D",
        });
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "Login successful",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login API",
            error,
        });
    }
};

module.exports = { registercontroller, logincontroller };