const express = require("express");
require("./conn.js");
const RegisterModel = require("./registerform")
// const RegisterModel = require('./registerform.js')
const cors = require("cors")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("hello from other sude")
// })

app.post("/register",(req,res)=>{
    RegisterModel.create(req.body)
    .then(Register => res.json(Register))
    .catch(err => res.json(err))
})

app.post("/login",(req,res)=>{
    const {mail,password} = req.body;
    RegisterModel.findOne({mail:mail})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("sucess")
            }else{
                res.json("check ur password")
            }
        }else{
            res.json("no record found bhai")
        }
    })
})


app.listen(port,()=>{
    console.log("connecttion is setup")
})