// Root Methods 
// For '/user' endpoints

const getUsers = (req, res, next) => {
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
    .json({ message: "Successfully deleted User"})
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