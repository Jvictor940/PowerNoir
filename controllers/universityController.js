const University = require('../models/University')

// For '/university' endpoint 

const getUniversities = async (req, res, next) => {

    const filter = {};
    const options = {};
    if (Object.keys(req.query).length) {
        const { 
            sortByUniversityName,
            universityName,
            sportsPrograms,
            scholarshipsAndGrants,
            limit
        } = req.query
        
        if (universityName) filter.universityName = true
        if (sportsPrograms) filter.sportsPrograms = true
        if (scholarshipsAndGrants) filter.scholarshipsAndGrants = true

        if (limit) options.limit = limit;
        if (sortByUniversityName) options.sort = {
            universityName: sortByUniversityName
        }
        console.log(filter, options)
    }
        
    try {
        const universities = await University.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(universities)
    } catch (err) {
        next(err)
    }
}

const createUniversity = async (req, res, next) => {

    try {
        const university = await University.create(req.body)

        res 
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(university)
    } catch (err) {
        next(err)
    }
}
    
const deleteUniversities = async (req, res, next) => {

    try {
       const deletedUniversities = await University.deleteMany()

       res 
       .status(200)
       .setHeader('Content-Type', 'application/json')
       .json(deletedUniversities)
    } catch (err) {
        next(err)
    }
}

// Params 
// For '/user/userId'
const getUniversity = async (req, res, next) => {

    try {
        const university = await University.findById(req.params.universityId)

        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(university)
    } catch (err) {
        next(err)
    }
}

const putUniversity = async (req, res, next) => {

    try {
        const updatedUniversity = await University.findByIdAndUpdate(req.params.universityId, req.body, {new: true})

        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedUniversity)
    } catch (err) {
        next(err)
    }
}

const deleteUniversity = async (req, res, next) => {

    try {
        const deletedUniversity = await University.findByIdAndDelete(req.params.universityId)

        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUniversity)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getUniversities, 
    createUniversity,
    deleteUniversities,
    getUniversity, 
    putUniversity, 
    deleteUniversity
}