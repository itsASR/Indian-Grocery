const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Grofer")

// {
// useCreateIndex: true,
// useNewUrlParser:true,
// useUnifiedTopology:true
// }
// ).then(()=>{
//     console.log("consction is sucessfull from conn.js");
// }).catch((e)=>{
//     console.log("nahi hua connection");
// })