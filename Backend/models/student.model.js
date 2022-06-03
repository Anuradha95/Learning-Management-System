const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentName: { type: String, required: true, unique: true, trim: true, minlength: 3},
  studentGrade: { type: String, required: true, unique: true, trim: true, maxlength: 2},
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;