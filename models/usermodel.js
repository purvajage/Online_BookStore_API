const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        userName:{
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
const User = mongoose.model("User", userSchema);
module.exports=User;