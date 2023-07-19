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

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "updated User" })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Successfully deleted User"})
}

module.exports = {
    getUsers,
    createUser, 
    putUser, 
    deleteUsers
}