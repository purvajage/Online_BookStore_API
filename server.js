const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const bookroutes=require("./routes/bookroutes");
const authroutes=require("./routes/authroutes");
const orderroutes=require("./models/ordermodel");
const reviewroutes=require("./routes/reviewroutes");
dotenv.config();
const app=expres();
app.use(cors());
app.use(express.json());
//routes
app.use("/api/auth",authroutes);
app.use("/api/book",bookroutes);
app.use("/api/review",reviewroutes);
app.use("/api/order",orderroutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
