const wishlist=require("../models/wishlistmodel");
const wishlistcontroller={
    addbooktowishlist:async(req,res)=>{
        try{
            const{userId,bookId}=req.body;
            let wishlist=await wishlist.findOne({userId});
            if(!wishlist){
                wishlist=new wish;isFinite({userId,books:[]});
            }
            const bookExists=wishlist.books.some((book)=>book.bookId.toString()===bookId);
     if(bookExists){
        return res.status(400).json({message:"book already in wishlist"});
     }
     wishlist.books.push({bookId});
     await wishlist.save();
     res.status(200).json({message:"book added to wishlist",wishlist});
        }
        catch(error){
            res.status(500).json({message:"error adding book to wishlist",error});
        }
    },
    removebookfromwishlist:async(req,res)=>{
        try{
            const{userId,bookId}=req.body;
            const wishlist=await wishlist.findOne({userId});
            if(!wishlist){
                return res.status(404).json({message:"wishlist not found"});
            }
            wishlist.books=wishlist.books.filter((book)=>book.bookId.toString()!==bookId);
            await wishlist.save();
            res.status(200).json({message:"book removed from wishlist",wishlist});
         }
         catch(error){
            res.status(500).json({message:"error removing book from wishlist",error});
         }
    },
    getuserwishlist:async(req,res)=>{
        try{
            const{userId}=req.params;
            const wishlist=await wishlist.findOne({userId}).populate('books.bookId');
            if(!wishlist){
                return res.status(404).json({message:"wishlist not found"});
            }
            res.status(200).json(wishlist);
        }catch(error){
            res.status(500).json({message:"error fetching wishlist",error});
        }
    },


};
module.exports=wishlistcontroller;