const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/backend_data_association");
const plm = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post' 
    }
  ],
  dp: {
    type: String, 
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  }
}, );
userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);
