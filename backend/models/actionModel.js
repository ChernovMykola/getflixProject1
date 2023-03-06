const mongoose = require('mongoose');

const actionSchema = mongoose.Schema({
    id: Number,
    title: String,
    synopsis: String,
    cast: [String],
    url: String,
    releaseYear: Number,
    //trailer : String,//ne se trouve pas dans api
    //rating : Number,//ne se trouve pas dans api
});

const action = mongoose.model('action', actionSchema);

module.exports = action;