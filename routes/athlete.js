const express = require('express')
const router = express.Router();
const {
    getAthletes,
    createAthlete,
    deleteAthletes,
    getAthlete,
    putAthlete,
    deleteAthlete, 
    getAthleteRating,
    postAthleteRating,
    deleteAthleteRating
} = require('../controllers/athleteController')

// root endpoint
router.route('/')
    .get(getAthletes)
    .post(createAthlete)
    .delete(deleteAthletes)

router.route('/:athleteId')
    .get(getAthlete)
    .put(putAthlete)
    .delete(deleteAthlete)

router.route('/:athleteId/ratings')
    .get(getAthleteRating)
    .post(postAthleteRating)
    .delete(deleteAthleteRating)

module.exports = router;