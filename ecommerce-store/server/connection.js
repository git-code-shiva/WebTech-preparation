const {default:mongoose} = require("mongoose");

async function getConnection(){
    await mongoose.connect('mongodb+srv://shivaSharma:shivaSharma@cluster0.aesodr0.mongodb.net/?retryWrites=true&w=majority');
};
module.exports= getConnection;