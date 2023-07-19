const express = require('express')
const router = express.Router();
const {
    getAthletes,
    createAthlete,
    deleteAthletes,
    // getAthlete,
    // putAthlete,
    // deleteAthlete
} = require('../controllers/athleteController')

// root endpoint
router.route('/')
    .get(getAthletes)
    .post(createAthlete)
    .delete(deleteAthletes)

// router.route('/:athleteId')
//     .get(getAthlete)
//     .put(putAthlete)
//     .delete(deleteAthlete)

module.exports = router;