const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const validator = require('validator')

const UserSchema = new Schema ({
    firstName: {
        type: String, 
        required: true, 
        maxLength: [20, 'First Name cannot be more than 20 letters']
    }, 

    lastName: {
        type: String, 
        required: true, 
        maxLength: [20, 'Last Name cannot have more than 20 letters']
    }, 

    gender: {
        type: String, 
        required: true, 
        enum: [
            'Male',
            'Female',
            'male', 
            'female'
        ]
    },
    
    university: {
        type: String, 
        required: true, 
        maxLength: 40
    }, 

    sport: {
        type: String, 
        maxLength: 15
    }, 

    title: { 
        type: String, 
        required: true, 
        maxLength: 20
    },

    department: {
        type: String, 
    },

    userName: {
        type: String, 
        required: true, 
        unique: true, 
    },

    email: {
        type: String, 
        unique: true,
        validate: (email) => validator.isEmail(email)
    }, 

    password: {
        type: String,
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    }

}, {
    timestamps: true
})

UserSchema.pre('save', function(next){
    this.firstName = this.firstName.toUpperCase()

    next()
})

UserSchema.post('save', function(next){
    this.firstName = this.firstName.toLowerCase()
})

module.exports = mongoose.model('User', UserSchema);