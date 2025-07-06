import express from 'express';
const app = express();

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//C = CREATE = POST METHOD
//R = READ = GET METHOD
//U = UPDATE = PUT METHOD
//D = DELETE = DELETE METHOD



