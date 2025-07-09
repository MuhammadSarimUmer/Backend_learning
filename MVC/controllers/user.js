import {User} from '../Models/User.js';
import mongoose from 'mongoose';
import express from 'express';


export const userController = async (req,res)=>{
    try{
       let user = await User.create(req.body);
       res.json({
         message:"USER HAS BEEN CREATED",
         NewUser : user
       })
    }
    catch(err){
        console.log(err);
    }
 }