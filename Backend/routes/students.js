const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const studentName = req.body.studentName;
  const studentGrade = req.body.studentGrade;
  const date = req.body.date;

  const newStudent = new Student({
    studentName,
    studentGrade,
    date,
  });

  newStudent.save()
  .then(() => res.json('Student added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      student.studentName = req.body.studentName;
      student.studetnGrade = req.body.studetnGrade;
      student.date = req.body.date;

      student.save()
        .then(() => res.json('Student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;