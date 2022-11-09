const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    tName:String,
    tDate: String
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;