const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    coins:Number,
});

const UserModel = mongoose.model("user",userSchema);

module.exports=UserModel;