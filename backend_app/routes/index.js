var express = require('express');
var router = express.Router();

const userModel = require("./users");

router.get('/',(req,res)=>{
  req.session.banned = false;
  res.cookie("age",12)
  res.render("index");

})

router.get("/readcookie",(req,res)=>{
 console.log(req.cookies.age)
 res.send("check cookie");
})

router.get("/checkban",(req,res)=>{
  if(req.session.banned===true){
    res.send("You are banned");
  }
  else{
    res.send("You are not banned");
  }
})

router.get("/create",async (req,res)=>{
   const createduser = await userModel.create({
    username: "Sarim_123",
    age:19,
    name:"Muhammad Sarim Umer"
   })
   res.send(createduser);
})

router.get("/read",async (req,res)=>{
  let Allusers = await userModel.findOne({
    username: "Sarim_123"
  });
  res.send(Allusers);
})

router.get("/delete",async(req,res)=>{
  let deleteduser = await userModel.findOneAndDelete({
    username: "Sarim_123"
  });
  res.send(deleteduser);
})

module.exports = router;
