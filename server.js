const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

//In order to read the config file globally
dotenv.config({ path: './config/config.env' });

const app = express()

// To read JSON data coming from the user. Parses payload that comes in as json
app.use(bodyParser.json())

// To read our config file we do process.env. If for some reason we it can't be read our fallback is here 
const PORT = process.env.PORT || 5001 

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
