const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/test");

const uerSchema = mongoose.Schema({
  userName:String,
  nickName:String,
  description:String,
  categories: {
    type:Array,
    default:[]
  },
  dateCreated:{
    type:Date,
    default:Date.now()
  }
})

module.exports = mongoose.model('user',uerSchema);


