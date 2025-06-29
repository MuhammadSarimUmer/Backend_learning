// let express = require('express');

// const app = express()
// app.set('view engine', 'ejs');
// app.use(express.static('./public'))

// app.use((req, res, next) => {
//   console.log("Msg from Middleware")
//   next();
    
// });

// app.get('/error', (req, res) => {

//   throw new Error('This is an error');
// })

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/s/:username', (req, res) => {
//     res.send(`Hello ${req.params.username}`);
//   })
// app.get('/main', (req, res) => {
//     res.render('index',{Top:"amazing"})
//   })
  


// app.listen(3000)