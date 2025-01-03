const book = require("../models/bookmodel");

const bookcontroller = {
    getAllBooks: async (req, res) => {
        try {
            const books = await book.find();
            res.status(200).json(books); 
        } catch (error) {
            res.status(500).json({ message: "Error fetching books", error });
        }
    },
   
    getBookId: async (req, res) => {
        try {
            const { id } = req.params;
            const foundBook = await book.findById(id); 
            if (!foundBook) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(foundBook);
        } catch (error) {
            res.status(500).json({ message: "Error fetching book by ID", error });
        }
    },
    createBook: async (req, res) => {
        try {
          const newBook = new book(req.body); 
          const savedBook = await newBook.save();
          res.status(201).json(savedBook); 
        } catch (error) {
          res.status(400).json({ message: "Error creating book", error });
        }
      },
    updateBook: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedBook = await book.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedBook) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(400).json({ message: "Error updating book", error });
        }
    },
    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedBook = await book.findByIdAndDelete(id);
            if (!deletedBook) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json({ message: "Book deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting book", error });
        }
    },
};

module.exports = bookcontroller;
