const express = require("express")
const mongoose = require("mongoose")


const RegisterSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    mail:String,
    password:String
})

const RegisterModel = new mongoose.model("Register",RegisterSchema)

module.exports = RegisterModel;