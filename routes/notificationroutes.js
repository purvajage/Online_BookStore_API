const express=require("express");
const notificationcontroller=require("../controllers/notificationcontroller");
const router=express.Router();
router.post('/send', notificationcontroller.sendNotification); 
router.get('/:userId', notificationcontroller.getUserNotifications);
router.patch('/read/:notificationId', notificationcontroller.markAsRead); 
router.delete('/:notificationId', notificationcontroller.deleteNotifications); 
module.exports=router;