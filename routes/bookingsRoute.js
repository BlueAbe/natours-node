//PART: MODULES
const express = require('express');
const bookingsController = require('../controllers/bookingsController');
const authController = require('../controllers/authController');
//PART: VARIABLES
const router = express.Router();

//PART: ROUTING
router.use(authController.protect);
router.get('/checkout-session/:tourId', bookingsController.getCheckoutSession);

router.use(authController.restrictTo('admin', 'lead-guide'));
router
  .route('/')
  .get(bookingsController.getAllBokings)
  .post(bookingsController.createBooking);

router
  .route('/:id')
  .get(bookingsController.getBooking)
  .patch(bookingsController.updateBooking)
  .delete(bookingsController.deleteBooking);
module.exports = router;
