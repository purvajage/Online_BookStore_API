const express=require("express");
const router=express.Router();
const reviewcontroller=require("../controllers/reviewcontroller");
//bookroutes
router.get("/", reviewcontroller.getAllReview); 
router.get("/:id", reviewcontroller.getReviewById); 
router.post("/", reviewcontroller.createReview); 
router.put("/:id", reviewcontroller.updateReview);
router.delete("/:id", reviewcontroller.deleteReview);
module.exports=router;