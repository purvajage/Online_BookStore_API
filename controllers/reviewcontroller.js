const review=require("../models/reviewmodel");
const reviewcontroller={
    getAllReview:async(req,res)=>{
        try{
            const reviews=await review.find();
            res.status(200).json(reviews);
        }catch(error){
            res.status(500).json({message:"error fetching API"});
        }
    },
    getReviewById:async(req,res)=>{
        try{
            const {id}=req.params;
            const foundreview=await review.findById(id);
            if(!foundreview){
                return res.status(404).json({message:"review not found"});
            }
            res.status(200).json(foundreview);
        }
        catch(error){
            res.status(500).json({message:"error fetching API"});
        }
    },
    createReview:async(req,res)=>{
        try{
            const newReview=new review(req.body);
            const savedReview=await newReview.save();
            res.status(201).json(savedReview);
        }catch(error){
            res.status(400).json({message:"error creating API"});
        }
    },
    updateReview:async(req,res)=>{
        try{
            const {id}=req.params;
            const updatedReview=await review.findByIdAndUpdate(
                id,
                req.body,
                {new:true}
            );
            if(!updatedReview){
                return res.status(404).json({message:"review not found"});
            }
            res.status(200).json(updatedReview);
        }catch(error){
            res.status(400).json({message:"error in fetching API"});
        }
    },
    deleteReview:async(req,res)=>{
        try{
            const{id}=req.params;
            const deletedReview=await review.findByIdAndDelete(id);
            if(!deletedReview){
                return res.status(404).json({messsage:"review not found"});
            }
            res.status(200).json({message:"review deleted sucessfully"});
        }catch(error){
            res.status(500).json({message:"error deleting review",error});
        }
    },
};
module.exports=reviewcontroller;