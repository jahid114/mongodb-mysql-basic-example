const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    address :  {
        type : String,
    },
    phone :  {
        type : String,
    },
    username : {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true,
    },
},{collection : 'userinfo'});

const User = new mongoose.model('User', userSchema);

module.exports = User;