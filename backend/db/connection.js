const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/exercise_db', { useNewUrlParser: true, useCreateIndex: true })

mongoose.Promise = Promise

module.exports = mongoose