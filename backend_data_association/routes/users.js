const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/backend_data_association");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
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

module.exports = mongoose.model('User', userSchema);
