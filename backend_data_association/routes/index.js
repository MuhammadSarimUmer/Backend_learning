var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create",async (req,res,)=>{
   let users = await userModel.create({
      username: 'HPone',
      password: '123456',
      email: 'hp13@gmail.com',
      fullName: 'HP'
   })
   res.send(users);
})
router.get("/createpost",async (req,res,)=>{
   let posts = await postModel.create({
      postText: 'Hello World kese ho ap',
      users:"6862cd7ed588ca5d681a3ae7"
   })
   let users = await userModel.findOne({_id:"6862cd7ed588ca5d681a3ae7"});
   users.posts.push(posts._id);
   await users.save();
   res.send("done");
})
router.get("/getpostofuser",async(req,res)=>{
   let user = await userModel.findOne({_id:"6862cd7ed588ca5d681a3ae7"}).populate("posts")
   res.send(user);
})

module.exports = router;
