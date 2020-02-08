var mongoose = require ('mongoose');
const ProfileSchema = new mongoose.Schema({
    name:String,
    username:String,
    password: String,
phone_no:String,
age:String,
location:String,
description:String,
})
module.exports = mongoose.model('fighters', ProfileSchema)