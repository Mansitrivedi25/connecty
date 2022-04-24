const mongoose = require('../connection');

const schema= new mongoose.Schema({
    title:String,
    date :String,
    speed:Object,
    location:Object,
    createAt:{type:Date, default:new Date()},
    user:{type:mongoose.Types.ObjectId,ref:"user"}
   
});
const model =mongoose.model("review", schema);

module.exports = model;