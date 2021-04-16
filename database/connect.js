//connecting mongodb database
const mongoose = require('mongoose');
require('dotenv').config()


function connect() {
    mongoose.connect("mongodb+srv://root:root12345@cluster0.1t27v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"|| 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}

module.exports= {
    connect,
}