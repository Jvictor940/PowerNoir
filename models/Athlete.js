const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AthleteSchema = new Schema({
    firstName: {
        type: String, 
        required: true, 
        maxLength: [20, 'First Name cannot have more than 20 letters']
    },

    middleName: {
        type: String,  
        maxLength: [20, 'Middle Name cannot have more than 20 letters']
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

    age: {
        type: Number, 
        required: true 
    }, 

    grade: {
        type: String, 
        required: true
    }, 

    gpa: {
        type: Number, 
        required: true,
    },

    sat: {
        type: Number, 
        required: true,
    },

    act: {
        type: Number, 
        required: true,
    },
    
    sport: {
        type: String,
    }, 

    number: {
        type: Number
    },

    primaryPosition: {
        type: String, 
        required: true
    }, 

    secondaryPosition: {
        type: String
    },

    state: {
        type: String, 
        required: true
    }, 
    
    school: {
        type: String, 
        required: true
    },

    weight: {
        type: Number, 
    },

    height: {
        type: Number
    },

    fortyYardDash: {
        type: Number
    },

    sixtyYardShuttle: {
        type: Number
    },

    verticalJump: {
        type: Number
    },

    broadJump: {
        type: Number
    },

    email: {
        type: String, 
        required: true, 
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

module.exports = mongoose.model('Athlete', AthleteSchema);