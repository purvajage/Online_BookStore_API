const mongoose=require("mongoose");
//schema
const bookSchema=new mongoose.Schema(
    {
        bookname:{
            type:String,
            required:[true,"book name is required"],
        },
        authorname:{
            type:String,
            required:[true,"author name is required"],
        },
        genre:{
            type:String
        },
        keywords:{
            type:String
        },
        bookprice:{
          type:String,
        required:[true,"book price is required"],
        },
        description:{
            type:String,
            required:[true,"description is required"],
        },
        createdAt: {
            type: Date,
            default: Date.now
          }

    }
);
const book=mongoose.model('book',bookSchema);
module.exports=book;