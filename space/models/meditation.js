var mongoose = require ('mongoose');
const MeditationSchema = new mongoose.Schema({ 
    name:String,
 Image:String,
description:String,
// keywords:String
})
module.exports = mongoose.model('meditations', MeditationSchema)