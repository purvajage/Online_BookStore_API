const book = require("../models/bookmodel");
const book=require("../models/bookmodel");
const bookcontroller={
    getAllBooks:async(req,res)=>{
        try{
            const books=await book.find();
            res.status(200).json(employees);
        }
        catch(error){
            res.status(500).json({message:"error in fetching API",error});
        }
    },
    getBookId:async(req,res)=>{
        try{
            const{id}=req.params;
            const book=await book.findById(id);
            if(!book){
                return res.status(404).json({message:"employee not found"});
            }
            res.status(200).json(employee);
        }catch(error){
            res.status(500).json({message:"error in fetching API",error});
        }
    },
    createbook:async(req,res)=>{
        try{
            const newBook=new book(req.body);
            const savedBook=await newBook.save();
            res.status(201).json(savedBook);
        }
        catch(error){
            res.status(400).json({message:"error creating employee",error});
        }
    },
    updateBook:async(req,res)=>{
        try{
            const {id}=req.params;
            const updateBook=await book.findByIdAndUpdate(id,req.body);
            if(!updateBook){
                return res.status(404).json({message:"employee not found"});
            }
            res.status(200).json(updateBook);
        }catch(error){
            res.status(400).json({message:"error updating employee"});
        }
    },
    deleteBook:async(req,res)=>{
        try{
            const{id}=req.params;
            const deleteBook=await book.findByIdAndDelete(id);
            if(!deleteBook){
                return res.status(404).json({message:"employee not found"});
            }
            res.status(200).json({message:"employee deleted sucessfully"});
        }
        catch(error){
            res.status(500).json({message:"error deleting employee",error});
        }
    },
};
module.exports=bookcontroller;