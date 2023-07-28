const express = require('express');
const router = express.Router()
const {
    getUniversities,
    createUniversity, 
    deleteUniversities,
    getUniversity,
    putUniversity,
    deleteUniversity
} = require('../controllers/universityController')

//root endpoint
router.route('/')
    .get(getUniversities)
    .post(createUniversity)
    .delete(deleteUniversities)

// params endpoints
router.route('/:universityId')
    .get(getUniversity)
    .put(putUniversity)
    .delete(deleteUniversity)

module.exports = router;