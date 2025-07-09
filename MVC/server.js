import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import {User} from './Models/User.js';
import {userController} from './controllers/user.js';
const app = express();


mongoose.connect('mongodb+srv://saltish426:Jn3SnikxBT4Tzrhd@nodejslearning.tgckb0e.mongodb.net/',{dbName:'nodejslearning'}).
then(()=>console.log('connected to mongodb')).catch((err)=>console.log("error is" + err));

app.use(express.static(path.join(path.resolve(),'public')));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('index.ejs');
  
})
app.post('/form-submit',userController)

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})