const express = require('express')

const app = express()

app.use(function(res,req,next){
   res.send("MSG FROM MIDDLEWARE");
   next();

})

app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/profile', (req, res) => {
    res.send('Hi from profile')
  })
  

app.listen(3000)


















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
