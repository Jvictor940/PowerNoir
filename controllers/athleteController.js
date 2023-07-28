const Athlete = require('../models/Athlete');
// Root Methods 
// For '/athlete' endpoints

const getAthletes = async (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            gender, 
            age, 
            grade, 
            sport, 
            number,
            position,
            state, 
            school, 
            rank
        } = req.query 
        const filter = [];

        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if (gender) filter.push(gender)
        if (age) filter.push(age)
        if (grade) filter.push(grade)
        if (sport) filter.push(sport)
        if (number) filter.push(number)
        if (position) filter.push(position)
        if (state) filter.push(state)
        if (school) filter.push(school)
        if (rank) filter.push(rank)

        for (const query of filter) {
            console.log(`Searching Athlete by ${query}`)
        }
    }

    
    try {
        const athletes = await Athlete.find()
        
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athletes)
    } catch (err) {
        next(err)
    }
}

const createAthlete = async (req, res, next) => {

    try {
        const athlete = await Athlete.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(athlete)
    } catch (err) {
        next(err)
    }
}


const deleteAthletes = async (req, res, next) => {
    try {
        const athletes = await Athlete.deleteMany()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deleteAthletes)
    } catch (err) {
        next(err)
    }

}

// Params 
// For '/athlete/athleteId'
const getAthlete = async (req, res, next) => {

    try {
        const athlete = await Athlete.findById(req.params.athleteId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athlete)
    } catch (err) {
        next(err)
    }
}

const putAthlete = async (req, res, next) => {

    try {
        const updatedAthlete = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})


        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedAthlete)
    } catch (err) {
        next(err)
    }
}

const deleteAthlete = async (req, res, next) => {

    try {
        const deletedAthlete = await Athlete.findByIdAndDelete(req.params.userId)


        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedAthlete)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    getAthletes, 
    createAthlete, 
    deleteAthletes, 
    getAthlete, 
    putAthlete, 
    deleteAthlete
}