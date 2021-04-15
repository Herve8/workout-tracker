//connecting mongodb database
const mongoose = require('mongoose');
require('dotenv').config()


function connect() {
    mongoose.connect(process.env.MONGODB_DSN || 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}

module.exports= {
    connect,
}