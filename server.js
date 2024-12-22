const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");

const authroutes=require("./routes/authroutes");
const bookroutes=require("./routes/bookroutes");
const orderroutes=require("./routes/orderroutes");
const reviewroutes=require("./routes/reviewroutes");
const wishlistroutes=require("./routes/wishlistroutes");
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
//routes
app.use("/api/auth",authroutes);
app.use("/api/books",bookroutes);
app.use("/api/review",reviewroutes);
app.use("/api/order",orderroutes);
app.use("/api/wishlist",wishlistroutes);
// Connect to MongoDB

mongoose.connect("mongodb://localhost:27017/book_api")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));



// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
