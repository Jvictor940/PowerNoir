const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
    universityName: {
        type: String, 
        required: true, 
        maxLength: 40, 
    }, 

    universityDescription: {
        type: String, 
        maxLength: 2000
    }, 

    sportsPrograms: {
        type: String,
    }, 

    scholarshipsAndGrants: {
        type: String, 
    }, 

    universityNumber: {
        type: Number
    }, 

}, {
    timestamps: true
})

module.exports = mongoose.model('University', UniversitySchema);