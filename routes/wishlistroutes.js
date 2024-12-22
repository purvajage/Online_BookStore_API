const express = require('express');
const wishlistcontroller = require('../controllers/wishlistcontroller');

const router = express.Router();


router.post('/:userId/add', wishlistcontroller.addbooktowishlist);

router.post('/:userId/remove', wishlistcontroller.removebookfromwishlist);


router.get('/:userId', wishlistcontroller.getuserwishlist);

module.exports = router;
