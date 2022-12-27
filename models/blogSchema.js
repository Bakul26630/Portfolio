const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    }
});

const Blog = new mongoose.model("Blog",blogSchema);
module.exports = Blog;