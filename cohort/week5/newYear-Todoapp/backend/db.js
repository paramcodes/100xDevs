const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const Todo = mongoose.model('Todo',todoSchema);
module.exports = {Todo};