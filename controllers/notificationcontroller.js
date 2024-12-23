const notification=require("../models/notificationmodel");
const sendNotification=async(req,res)=>{
    try{
        const{userId,message}=req.body;
        const notification=new notification({userId,message});
        await notification.save();
        res.status(201).json({message:"notification sent sucessfully",notification});
    }catch(error){
        res.status(500).json({message:"error sending notfication",error});
    }
};
const getUserNotifications=async(req,res)=>{
    try{
        const {userId}=req.params;
        const notifications=await notification.find({userId}).sort({createdAt:-1});
        if(notification.length===0){
            return res.status(404).json({message:"no notification found"});
        }
        res.status(200).json(notifications);
    }catch(error){
        res.status(500).json({message:"error fetching notifications",error});
    }
};
const markAsRead=async(req,res)=>{
    try{
        const{notificationId}=req.params;
        const notification=await notification.findById(notificationId);
        if(!notification){
            return res.status(404).json({message:"notification not found"});
        }
        notification.isRead=true;
        await notification.save();
        res.status(200).json({message:"notification marked as read",notification});
    }
    catch(error){
        res.status(500)/json({message:"error marking notification as read",error});
    }
};
const deleteNotifications=async(req,res)=>{
    try{
        const {notificationId}=req.params;
        const notification=await notification.findById(notificationId);
        if(!notification){
            return res.status(404).json({message:"notification not found"});
        }
        await notification.deleteOne();
        res.status(200).json({message:"notification deleted sucessfully"});

    }catch(error){
        res.status(500).json({message:"error deleting notifications",error});
    }
};
module.exports={
    deleteNotifications,
    getUserNotifications,
    markAsRead,
    sendNotification,
};
