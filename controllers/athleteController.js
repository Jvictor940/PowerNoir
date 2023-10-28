const Athlete = require('../models/Athlete');
// Root Methods 
// For '/athlete' endpoints

const getAthletes = async (req, res, next) => {
    // query parameter
    const filter = {};
    const options = {};
    if (Object.keys(req.query).length) {
        const {
            // sortByFirstName,
            // sortByLastName,
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
            rank,
            limit
        } = req.query



        if (firstName) filter.firstName = true;
        if (lastName) filter.lastName = true;
        if (gender) filter.gender = true;
        if (age) filter.age = true;
        if (grade) filter.grade = true;
        if (sport) filter.sport = true;
        if (number) filter.number = true;
        if (position) filter.position = true;
        if (state) filter.state = true;
        if (school) filter.school = true;
        if (rank) filter.rank = true;
        // if (firstName) filter.push(firstName)
        // if (lastName) filter.push(lastName)
        // if (gender) filter.push(gender)
        // if (age) filter.push(age)
        // if (grade) filter.push(grade)
        // if (sport) filter.push(sport)
        // if (number) filter.push(number)
        // if (position) filter.push(position)
        // if (state) filter.push(state)
        // if (school) filter.push(school)
        // if (rank) filter.push(rank)

        if (limit) options.limit = limit;
        if (sortByAthlete) options.sort = {
            firstName: sortByAthlete,
            // lastName,
            // gender,
            // age,
            // grade, 
            // sport,
            // number,
            // position, 
            // state, 
            // school,
            // rank
        }

        console.log(filter, options)

        // for (const query of filter) {
        //     console.log(`Searching Athlete by ${query}`)
        // }
    }

    
    try {
        const athletes = await Athlete.find({}, filter, options)
        
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

// For '/:athleteId/ratings' endpoint
const getAthleteRating = async (req, res, next) => {

    try {
        const athlete = await Athlete.findById(req.params.athleteId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athlete.ratings)
    } catch (err) {
        next(err)
    }
}

const postAthleteRating = async (req, res, next) => { 

    try {
        const athlete = await Athlete.findById(req.params.athleteId)
        athlete.ratings.push(req.body)

        // saves new rating to the Database
        await athlete.save()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athlete.ratings)
    } catch (err) {
        next(err)
    }
}

const deleteAthleteRating = async (req, res, next) => {

    try {
        const athlete = await athlete.findById(req.params.athleteId);

        athlete.ratings = []

        await result.save()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json( {message: `Deleted rating for ${req.params.athleteId}`})
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
    deleteAthlete, 
    getAthleteRating, 
    postAthleteRating, 
    deleteAthleteRating
}