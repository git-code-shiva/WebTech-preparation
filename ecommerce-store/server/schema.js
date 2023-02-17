const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddGame = new Schema({
    name:{type:String},
    price:{type:Number},
    description:{type:String},
    postImage:{
        type:String,
        default:"no image"
    }
});

AddGame.set('timestamps',true);
mongoose.model('GAMEMODEL', AddGame);