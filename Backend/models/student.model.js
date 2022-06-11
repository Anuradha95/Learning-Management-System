const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentName: { type: String, unique: true, minlength: 3},
  studentGrade: { type: String, unique: true, maxlength: 2},
  date: { type: String},
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;