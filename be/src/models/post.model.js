const mongoose = require("mongoose");
const Post = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
        maxlength:100
    },
    address:{
        type: String,
        required:true
    },
    area: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required:true
    },
    deposit:{
        type:String,
    },
    security:{
        type:[String],
    },
    utils:{
        type:[String],
    },
    interior:{
        type:[String],
    }

}, { timestamps: true });
module.exports = mongoose.model("Post", Post);