const User = require('../models/User')
// Root Methods 
// For '/user' endpoints

const getUsers = (req, res, next) => {
        // query parameter 
        if (Object.keys(req.query).length) {
            // Able to search through College staff by gender, name, which college they're representing, which sport if they're a coach, and which position they hold. 
            const {
                gender, 
                userName, 
                college,
                sport,
                title 
            } = req.query 
            const filter = [];
    
            if (gender) filter.push(gender)
            if (userName) filter.push(userName)
            if (sport) filter.push(sport)
            if (college) filter.push(college)
            if (title) filter.push(title)
    
            for (const query of filter) {
                console.log(`Searching Athlete by ${query}`)
            }
        }

    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Show me all the Users" })
}

const createUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `${req.body.userName}'s profile created` })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Successfully deleted ${req.body.userName}`})
}

// Params 
// For '/user/userId'
const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { message: `Show me the user with User Id of ${req.params.userId}` })
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the user with userId of ${req.params.userId}` })
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the user with userId of ${req.params.userId}` })
}

module.exports = {
    getUsers,
    createUser, 
    deleteUsers, 
    getUser, 
    putUser, 
    deleteUser
}