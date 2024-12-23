const mongoose=require("mongoose");
const notificationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    message:{
        type:String,
        require:true
    },
    isRead:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model("notification",notificationSchema);