var express = require('express');
var router = express.Router();

var path = require('path');
// var pathName = __dirname + '/views/'
var fighters = require('../models/fighter')
var books = require('../models/book')
var multer = require('multer')
// var bcrypt = require('bcryptjs')
// var passport = require('passport')

/* GET home page. */

// const isauth = (req, res, next) => {
//   if(req.isAuthenticated()){
//     res.redirect('back')  
//   }
//   else
//     next()
  
// }

router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/register', async function (req, res, next) {
  fighters.findOne({ phone_no: req.body.phone_no }, async function (err, fighter) {
    if (fighter)
      res.render('alreadyexists');
    else {
      var fighter = new fighters({
        name: req.body.name, location: req.body.location, username: req.body.username,
        password: req.body.password, description: req.body.description, age: req.body.age
      })
      console.log('profile saved', fighter);
      res.redirect('/login');
    }
    // try {

    //   const salt = await bcrypt.genSaltSync();
    //   const hash = await bcrypt.hashSync(req.body.password, salt);
    //   fighter.password = hash;

    //   var promise = fighter.save();
    //   await promise;
    //   console.log('profile saved', fighter)

    //   res.redirect('/login');
    // }
    // catch (err) {
    //   console.log(err);
    // }
  })
})
// router.get('/login',  function(req, res, next)
// {
// res.render('login');

// })
router.get('/home',  function(req, res, next)
{
res.render('home');

})


router.get('/profile', function (req, res, next) 
{
  console.log(req.user);
  fighters.findOne({ _id: req.user }, (err, fighter) => {
    res.render('profile', {fighter});

  })
})

router.get('/add', function (req, res, next) {
  res.render('booksThatHelpedMe');
})
router.get('/viewbooks', function (req, res, next) {
  
  books.find().exec((err, books) =>
  {
    console.log('books...', books);
    res.render('booksToRelate', {books})
  })

})

var storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))

  }
})

var Upload = multer({ storage: storage }).single('file');
router.post('/Add', Upload, async function (req, res, next) {
  var data = { name: req.body.name, description: req.body.description, Image: "/uploads/" + req.file.filename }
  var book = new books(data)
  try {
    var promise = book.save();
    await promise;
    console.log('book saved', book)
    res.redirect('/booksToRelate'); 
  }
  catch (error) {
    console.log(error);
  }
})
// router.post('/authenticate', function (request, response, next) {
//   passport.authenticate('local', function (err, user, info) {
//     if (!user) {
//       console.log(err);
//       response.redirect('/alreadyexists')
//     }
//     else {

//       request.login(user, function (error) {
//         if (error) return next(error);
//         fighter = request.user;
//         response.redirect('/home');

//       });
//     }
//   }
//   )
//     (request, response, next);
// });

module.exports = router;
