import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    let name = "sarim umer"
res.render('index.ejs',{name});
})


















const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})