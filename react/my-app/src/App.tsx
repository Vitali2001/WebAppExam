import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Students from './components/students/index.tsx';
import CurrentStudent from './components/curentStudent/index.tsx';
import UpdateStudent from "./components/UpdateStudent/index.tsx"
import CreateStudent from "./components/AddStudent/index.tsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Students/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path = "current_student" element={<CurrentStudent/>}/>
        <Route path = "update_student" element={<UpdateStudent/>}/>
        <Route path = "add_student" element={<CreateStudent/>}/>

      </Routes>
    </>
  );
}

export default App;
