const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Links to User _id
    books: [
      {
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'book', required: true },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Wishlist', wishlistSchema);
