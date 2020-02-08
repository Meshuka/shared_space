var mongoose = require ('mongoose');
const PlaceSchema = new mongoose.Schema({ 
    name:String,
 Image:String,
description:String,
// keywords:String
})
module.exports = mongoose.model('places', PlaceSchema)