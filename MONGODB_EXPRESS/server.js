import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://saltish426:Jn3SnikxBT4Tzrhd@nodejslearning.tgckb0e.mongodb.net/',{dbName:'nodejslearning'}).
then(()=>console.log('connected to mongodb')).catch((err)=>console.log("error is" + err));

const app = express();
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("hello world");
  
})















const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
