const express = require('express');
const app = express();
const schema = require("./schema");
const connection = require("./connection");
const cors = require('cors');
const path = require('path');
const {default:mongoose} = require('mongoose');
connection();
app.use(cors());
mongoose.connection.on("connected",()=>console.log("connected to mongoDb"));
mongoose.connection.on("error",()=>console.log("failed to connect mongoDB"))

require('./schema');
app.use(express.json());
app.use(require('./router'));
const port = 2525||process.env.port;

// app.get("*",(req,res)=>{
//     res.sendFile
// })

app.listen(port,()=>(console.log(`server is up at port ${port}`)));