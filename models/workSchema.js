const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        trim:true
    },
    code:{
        type:{},
        required:true,
    }
});