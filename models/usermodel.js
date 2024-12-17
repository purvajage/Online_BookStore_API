const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            require:[true,"user name is required"],
        },
        email:{
            type:String,
            require:[true,"email is required"],
        },
        password:{
            type:String,
            require:[true,"password is required"],
        },
        address:{
            type:Array,
        },
        phone:{
            type:String ,
            require:[true,"phone is required"],
        },
    },{timestamps:true}
);