import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import CreateStudent from "./components/CreateStudent";


function App() {
  return (
    <div>
      <Header />
      <CreateStudent />
      <StudentsList />      
    </div>
   
  );
}

export default App;

