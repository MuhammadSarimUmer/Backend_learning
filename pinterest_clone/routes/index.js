var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post("/register",async (req,res)=>{
  const { username, email, fullName } = req.body;

  const userData = new userModel({ username, email, fullName });

  userModel.register(userData,req.body.password).then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile");
    })
  })
})
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}
router.get("/profile",isLoggedIn,(req,res)=>{
 
})
module.exports = router;
