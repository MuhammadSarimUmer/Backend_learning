var express = require('express');
var router = express.Router();

const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));
const userModel = require("./users");
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',);
});
router.get("/create",async function(req,res){
let userdata = await userModel.create({
  userName:"Muhammad aliyaan",
  nickName:"Nickname3",
  description:"I am a senior flutter developer",
  categories:["Dart","Flutter","Firebase","Mongodb"],
 //no need to change dat and time since it is default set in the users.js and will give current date of when the post is made
});
res.send(userdata);
})

router.get("/find",async (req,res)=>{
  let regx = new RegExp("^Sarim Umer$","i")
  let user = await userModel.find({categories : {
   $exists:true,
  }});
  res.send(user)
})

module.exports = router;
