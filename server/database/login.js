const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Login', Schema)