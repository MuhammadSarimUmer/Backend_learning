const mongoose = require('mongoose');
const users = require('./users');
mongoose.connect("mongodb://127.0.0.1:27017/backend_data_association");

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    trim: true
  },
  postDateTime: {  // Custom field for storing date and time
    type: Date,
    default: Date.now
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  likes: 
    {
      type: Array,
      default: []
    }
  
},); // adds createdAt and updatedAt automatically

module.exports = mongoose.model('Post', postSchema);
