const mongoose = require('mongoose');
const validator = require("validator");

const querySchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        unique:[true,"Email already eists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    Contact:{
        type:String,
        required:true,
        unique:true,
        maxLength:10,
        minLength:10
    },
    Concern:{
        type:String,
        required:true,
        minLength:20,
        trim:true
    }
});

const Query = new mongoose.model("Query",querySchema);
module.exports = Query;