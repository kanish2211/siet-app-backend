const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50,
        trim: true,

    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim :true,
    },
    usertype:{
        type:Number,
        required:true,
        default:0

    }
    
});

module.exports =  mongoose.model("User",userSchema)
