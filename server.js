const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const athlete = require('./routes/athlete')
const user = require('./routes/user')
const logger = require('./middlewares/logger')
const erroHandler = require('./middlewares/error')
const connectDB = require('./config/db');
const university = require('./routes/university');

//In order to read the config file globally
dotenv.config({ path: './config/config.env' });

connectDB()

const app = express()

// To read JSON data coming from the user. Parses payload that comes in as json
app.use(bodyParser.json())

app.use(logger)
app.use(erroHandler)
app.use('/athlete', athlete)
app.use('/user', user)
app.use('/university', university)

// To read our config file we do process.env. If for some reason we it can't be read our fallback is here 
const PORT = process.env.PORT || 5001 

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

//automatically kills the server gracefully when we have unhandled rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1)) //exits gracefully with exit code of 1(uncaught fatal exception)
})
