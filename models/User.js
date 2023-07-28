const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const UserSchema = new Schema ({
    firstName: {
        type: String, 
        required: true, 
        maxLength: 10
    }, 

    lastName: {
        type: String, 
        required: true, 
        maxLength: 10
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
    }, 

    password: {
        type: String, 
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);