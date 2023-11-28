const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  carDetails: Object, // Store car details as needed
  // Other reservation data
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
