const express = require('express');
const wishlistController = require('../controllers/wishlistcontroller');

const router = express.Router();


router.post('/add', wishlistController.addbooktowishlist);


router.post('/remove', wishlistcontroller.removeBookFromWishlist);


router.get('/:userId', wishlistcontroller.getuserwishlist);

module.exports = router;
