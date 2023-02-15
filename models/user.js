const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String  ,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const User = mongoose.model('User', postSchema);

module.exports = User;