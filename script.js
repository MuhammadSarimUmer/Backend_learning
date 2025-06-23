import express from 'express'

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('./public'))

app.use((req, res, next) => {
  console.log("Msg from Middleware")
  next();
    
});

app.get('/error', (req, res) => {

  throw new Error('This is an error');
})

app.get('/', (req, res) => {
  res.render('index',{Top:"best"})
})
app.get('/profile', (req, res) => {
  res.send(`Hello profile`)
})
app.get('/profile/:username', (req, res) => {
  res.send(`Hello ${req.params.username}`)
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})


app.listen(3000)



















// const express = require('express')

// const app = express()

// app.use(function(res,req,next){
//    res.send("MSG FROM MIDDLEWARE");
//    next();

// })

// app.get('/', (req, res) => {
//   res.send('Hello')
// })
// app.get('/profile', (req, res) => {
//     res.send('Hi from profile')
//   })
  

// app.listen(3000)


















// var a  = 23;

// module.exports = a;

// var figlet = require("figlet");

// figlet("SARIM UMER", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
