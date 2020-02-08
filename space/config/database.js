const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shared_space',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
	.catch((err) => console.log(err));
	
module.exports = mongoose;
