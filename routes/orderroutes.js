const express=require("express");
const router=express.Router();
const ordercontroller=require("../controllers/ordercontroller");
//routes'
router.post("/", ordercontroller.createorder);
router.get("/", ordercontroller.getAllOrders);
router.get("/:id", ordercontroller.getOrderById);
router.put("/:id", ordercontroller.updateorderstatus);
router.delete("/:id", ordercontroller.deleteorder);
module.exports=router;