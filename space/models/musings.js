var mongoose = require ('mongoose');
const MusingsSchema = new mongoose.Schema({ 
title:String,
description:String,
// keywords:String
})
module.exports = mongoose.model('musings', MusingsSchema)