//Creating Schema And Model 

const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const List_of_Movies = new Schema({

    MovieName: {
        type: String
    },
    Hero:{
        type: String
    },
    Timeing: {
        type: String
    },
    MovieStatus: {
        type: String
    }

})
module.exports = mongoose.model('list_of_movies', List_of_Movies);

