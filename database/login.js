const mongoose = require('mongoose');

const Schema = mongoose.Schema
let loginSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    
    password :{
        type:String,
        required:true
    }
})

loginSchema=mongoose.model("Login",loginSchema);

module.exports=loginSchema;