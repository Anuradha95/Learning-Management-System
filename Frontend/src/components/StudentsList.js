import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentsList() {

    const [studentsArray, setStudentsArray] = useState([]);

    const fetchNotes = async() =>{
        const { data } = await axios.get('http://localhost:5000/students/');
        setStudentsArray(data);
    }

    useEffect(()=>{
        fetchNotes();
    },[]);

    const studentDelete=(_id,e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:5000/students/${_id}`)
        .then(function (response) {
            console.log(response);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function createRaw(student) {
        return (
            <tr>
            <td>{student._id}</td>
            <td>{student.studentName}</td>
            <td>{student.studentGrade}</td>
            <td>{student.date}</td>
            <td><button type="button" onClick={(e)=> studentDelete(student._id,e)} class="btn btn-danger">Delete Student</button></td>
        </tr>
        );
      }
  
    return (
    <div>
     <h1>Students List</h1>
     <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Student Grade</th>
                    <th>Entered Date</th>
                    </tr>
                </thead>
                <tbody>
                {studentsArray.map(createRaw)}
                </tbody>
            </table>
    </div>
    );

    
  
}
export default StudentsList;