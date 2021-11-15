const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({

    name:{
        type: String,
        require: [true, 'Please enter your name'],
        lowercase: true
    },
    email:{
        type: String,
        require: [true, 'Please enter a valid email'],
        unique: true
    },
    subject:{
        type: String,
        require: [true, 'Please enter a subject'],
        maxLength: [100, 'Maximum length is 100 characters']
    },
    message:{
        type: String,
        require: [true, 'Please enter a message'],
        maxLength: [600, 'Maximum length is 600 characters']
    },

}, {timestamps: true})

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;