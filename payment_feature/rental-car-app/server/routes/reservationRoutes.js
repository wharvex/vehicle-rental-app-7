const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Route to create a new reservation
router.post('/create', reservationController.createReservation);

// Route to update an existing reservation by ID
router.put('/update/:id', reservationController.updateReservationById);

// Route to delete a reservation by ID
router.delete('/:id', reservationController.deleteReservation);

// Route to get a reservation by ID
router.get('/:id', reservationController.getReservationById);

module.exports = router;
