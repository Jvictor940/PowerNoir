// Root Methods 
// For '/athlete' endpoints

const getAthletes = (req, res, next) => {
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

    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Show me all the Athletes" })
}

const createAthlete = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `${req.body.athleteName}'s profile created` })
}


const deleteAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Successfully deleted ${req.body.athletename}'s profile`})
}

// Params 
// For '/athlete/athleteId'
const getAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { message: `Show me the athlete with Athlete Id of ${req.params.athleteId}` })
}

const putAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the athlete with athleteId of ${req.params.athleteId}` })
}

const deleteAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the athlete with athleteId of ${req.params.athleteId}` })
}


module.exports = {
    getAthletes, 
    createAthlete, 
    deleteAthletes, 
    getAthlete, 
    putAthlete, 
    deleteAthlete
}