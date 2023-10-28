const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
    universityName: {
        type: String, 
        required: true, 
        maxLength: [40, 'University name cannot have more than 40 characters'] 
    }, 

    universityDescription: {
        type: String, 
        maxLength: [2000, 'University description can not have more than 2000 characters']
    }, 

    sportsPrograms: {
        type: [String],
    }, 

    scholarshipsAndGrants: {
        type: [String], 
    }, 

    universityNumber: {
        type: Number
    }, 

}, {
    timestamps: true
})

UniversitySchema.pre('save', function(next){
    this.universityName = this.universityName.toUpperCase()

    next()
})

UniversitySchema.post('save', function(next){
    this.universityName = this.universityName.toLowerCase()
})

module.exports = mongoose.model('University', UniversitySchema);