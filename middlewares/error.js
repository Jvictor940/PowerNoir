const errorHandler = (err, req, res, next) => {
    console.log(err.stack)

    res
    .status(error.stauscode || 500)
    .setHeader('Content-Type', 'application/json')
    .json({ message:err.message || 'Server Error' })
}

module.exports = erroHandler;