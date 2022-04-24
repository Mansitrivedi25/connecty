const mongoose = require('../connection');
const schema= new mongoose.Schema({
    title:String,
    text :String,
    user:{type:mongoose.Types.ObjectId,ref:"user"},
    createAt:{type:Date, default:new Date()}
});
const model =mongoose.model("query", schema);

module.exports = model;