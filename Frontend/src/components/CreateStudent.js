import React, { useState, useRef } from 'react';
import axios from 'axios';

function CreateStudent() {

  const [formValue, setformValue] = useState({
    studentName: '',
    studentGrade: '',
    date: '',
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }


      const handleSubmit = (e)=> {
        console.log('submit');
        e.preventDefault();
        axios.post('http://localhost:5000/students/add', {
          studentName: formValue.studentName,
          studentGrade: formValue.studentGrade,
          date: formValue.date
        })
        .then(function (response) {
          console.log(response);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
        
      };

  return (
    <div>
    <h1>Create Student</h1>
    <form className="p-3 bg-success bg-opacity-25 mb-5" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input name="studentName" onChange={handleChange} value={formValue.studentName}  className="form-control" placeholder="Student name" />
      </div>
      <div className="mb-2">
        <input name="studentGrade" onChange={handleChange} value={formValue.studentGrade} className="form-control" placeholder="Student Grade" />
      </div>
      <div className="mb-2">
        <input name="date" onChange={handleChange} value={formValue.date}  className="form-control" placeholder="Entered Date" />
      </div>

      <button type="submit" className="btn btn-success">Add new Student</button>
    </form>
    </div>
  )
  
}
export default CreateStudent;