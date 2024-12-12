const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const userscredentials = new Schema({

    UserName: {
        type: String
    },
    Mail_Id: {
        type: String
    },
    Password: {
        type: String
    }

});

module.exports = mongoose.model('userscredentials', userscredentials);

