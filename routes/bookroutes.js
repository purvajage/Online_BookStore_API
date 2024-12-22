const express=require("express");
const router=express.Router();
const bookcontroller=require("../controllers/bookcontroller");
//bookroutes
router.get("/", bookcontroller.getAllBooks); 
router.get("/:id", bookcontroller.getBookId); 
router.post("/", bookcontroller.createBook); 
router.put("/:id", bookcontroller.updateBook);
router.delete("/:id", bookcontroller.deleteBook);
module.exports=router;