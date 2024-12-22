const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    books: [
      {
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'book', required: true },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('wishlist', wishlistSchema);
