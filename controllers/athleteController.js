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

const putAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "updated Athlete" })
}

const deleteAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Successfully deleted Athlete"})
}

module.exports = {
    getAthletes, 
    createAthlete, 
    putAthlete, 
    deleteAthletes
}