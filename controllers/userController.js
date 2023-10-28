const User = require('../models/User')
// Root Methods 
// For '/user' endpoints

const getUsers = async (req, res, next) => {
        // query parameter 
        const filter = {};
        const options = {};
        if (Object.keys(req.query).length) {
            // Able to search through College staff by gender, name, which college they're representing, which sport if they're a coach, and which position they hold. 
            const {
                sortByUser,
                gender, 
                firstName, 
                lastName, 
                college,
                sport,
                title,
                limit
            } = req.query
    
            if (gender) filter.gender = true
            if (firstName) filter.firstName = true
            if (lastName) filter.lastName = true
            if (sport) filter.sport = true
            if (college) filter.college = true
            if (title) filter.title = true

            if (limit) options.limit = limit;
            if (sortByUser) options.sort = {
                lastName: sortByUser
            }
            console.log(filter, options)
        }

    try {
        const users = await User.find()

        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }

}

const createUser = async (req, res, next) => {

    try {
        const user = await User.create(req.body)

        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }

}

const deleteUsers = async (req, res, next) => {

    try {
        const deletedUsers = await User.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUsers)
    } catch (err) {
        next(err)
    }
}

// Params 
// For '/user/userId'
const getUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.userId)


        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
}

const putUser = async (req, res, next) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedUser)
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {

    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId)


        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUser)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getUsers,
    createUser, 
    deleteUsers, 
    getUser, 
    putUser, 
    deleteUser
}