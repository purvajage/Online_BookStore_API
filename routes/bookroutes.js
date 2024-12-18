const express=require("express");
const router=express.router();
const bookcontroller=require("../controllers/bookcontroller");
//bookroutes
router.get("/",bookcontroller,bookcontroller.getAllBooks);
router.post("/",bookcontroller,bookcontroller.getBookId);
router.post("/",bookcontroller,bookcontroller.createbook);
router.put("/",bookcontroller,bookcontroller.updateBook);
router.delete("/",bookcontroller,bookcontroller.deleteBook);
module.exports=router;