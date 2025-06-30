var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create',async (req,res,)=>{
   let users = await userModel.create({
      username: 'HP',
      password: '123456',
      email: 'hp@gmail.com',
      fullName: 'HP'
   })
   res.send(users);
})
router.get("/createPost",async (req,res,)=>{
   let posts = await postModel.create({
      postText: 'Hello World',
      users:"6862cd7ed588ca5d681a3ae7"
   })
   res.send(posts);
})

module.exports = router;
