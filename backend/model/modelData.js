const mongoose = require('mongoose');
const blueprint = new mongoose.Schema({
    name:String,
    location: String,
    likes: String,
    description: String,
    PostImage: String,
    date: String
});
module.exports = mongoose.model('instaCollection',blueprint)