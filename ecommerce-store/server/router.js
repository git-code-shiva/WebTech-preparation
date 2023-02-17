const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const GAMEMODEL = mongoose.model("GAMEMODEL");

router.get('/all',(req,res)=>{
    GAMEMODEL.find().sort({createdAt:-1}).then(posts=>res.json(posts)).catch(err=>console.log(err))

})

router.post("/addGame",(req,res)=>{
    const {name,price,description,postImage}=req.body;
    if(!name || !price || !description || !postImage){
        return req.json({
            message:"Please fill all the fields"
        })
    }

    const post = new GAMEMODEL({
        name,price,description,postImage
    })
    post.save().then((result)=>{
        return res.json({
            post:result
        })
    }).catch((err)=>{
        console.log(err);
    })
    res.json("ok");
})

module.exports = router;