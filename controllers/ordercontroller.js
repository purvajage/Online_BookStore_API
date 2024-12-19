const book=require("../models/bookmodel");
const order=require("../models/ordermodel");
const user=require("../models/usermodel");
const ordercontroller={
    createorder:async(req,res)=>{
        try{
            const {book,user,quantity}=req.body;
            if(!book || !user || !quantity){
                return res.status(400).json({message:"book user quantity values are required"});
            }
            const bookdetails=await book.findById(book);
            if(!bookdetails){
                return res.status(404).json({message:"book not found"});
            }
            const totalPrice=bookdetails.bookprice*quantity;
            const neworder=new order({
                book,
                user,
                quantity,
                totalPrice,
            });
            const savedorder=await neworder.save();
            res.status(201).json({sucess:true,message:"order create sucessfully"});
        }catch(error){
            console.error("error creating order",error);
            res.status(500).json({message:"error creating order",error});
        }
    },
    getAllOrders:async(req,res)=>{
        try{
            const orders=await order.find()
            .populate("book","bookname authorname")
            .populate("user","userName email");
            res.status(200).json({sucess:true,data:order});
        }catch(error){
            console.error("error fetching orders",error);
            res.status(500).json({message:"error fetching orders",error});
        }
    },
    getOrderById:async(req,res)=>{
        try{
            const{id}=req.params;
            const order=await order.findById(id)
            .populate("book","bookname authorname")
            .populate("user","userName,email");
            if(!order){
                return res.status(404).json({message:"order not found"});
            }
            res.status(200).json({sucess:true,data:order});
        }
        catch(error){
            console.error("error fetching order by id");
            res.status(500).json({messsage:"error fetching order",error});
        }
    },
    updateorderstatus:async(req,res)=>{
        try{
            const{id}=req.params;
            const {status}=req.params;
            if (!["pending", "completed", "cancelled"].includes(status)) {
                return res.status(400).json({ message: "Invalid status value." });
              }
              const updateorder=await order.findByIdAndUpdate(
                IF,
                {status},
                {new:true}
              );
              if(!updateorder){
                return res.status(404).json({message:"order not found"});
              }
              res.status(200).json({sucess:true,message:"order status updated sucessfully"});
        }catch(error){
            console.error("error updating order status",error);
            res.status(500).json({message:"error updating order",error});
        }
    },
    deleteorder:async(req,res)=>{
        try{
            const {id}=req.params;
            const deleteorder=await order.findByIdAndDelete(id);
            if(!deleteorder){
                return res.status(404).json({message:"order not found"});
            }
            res.status(404).json({sucess:true,message:"order deleted sucessfully"});
        }catch(error){
            console.error("error deleting order",error);
            res.status(500).json({message:"error deleting order",error});
        }
    },
};
module.exports=ordercontroller;