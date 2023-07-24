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
    
    college: {
        type: String, 
        required: true, 
        maxLength: 20
    }, 

    sport: {
        type: String, 
        maxLength: 15
    }, 

    title: { 
        type: String, 
        required: true, 
        maxLength: 20
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);