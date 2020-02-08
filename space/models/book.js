var mongoose = require ('mongoose');
const BookSchema = new mongoose.Schema({ 
    name:String,
 Image:String,
description:String,
// keywords:String
})
module.exports = mongoose.model('books', BookSchema)