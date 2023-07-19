// Root Methods 
// For '/athlete' endpoints

const getAthletes = (req, res, next) => {
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
    .json({ message: "Successfully deleted Athlete"})
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