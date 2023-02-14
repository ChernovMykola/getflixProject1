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

const Post = mongoose.model('Post', postSchema);

module.exports = Post;