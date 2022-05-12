const mongoose = require('mongoose');

//creating schema for user
const NotesSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    tag:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now

    },
  
  });
  module.exports = mongoose.model('notes', NotesSchema);