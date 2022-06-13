import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import SetData from './components/employeData';
import Employees from './components/employees';
import Home from './components/home'
import './login.css';
import AddUser from './components/addNewEmployee';
import DeleteEmployee from './components/deleteTest'
import TasksData from './components/TasksData';
import TasksTable from './components/tasksTable';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                 <Route exact path='/' element={<Login/>} />
                 <Route exact path='/register' element={<Register/>} />
                 <Route exact path='/setData' element={<SetData/>} />
                 <Route exact path='/employees' element={<Employees/>} />
                 <Route exact path='/home' element={<Home/>} />
                 <Route exact path='/addUser' element={<AddUser/>} />
                 <Route exact path='/deleteEmployee' element={<DeleteEmployee/>} />
                 <Route exact path='/TasksData' element={<TasksData/>} />
                 <Route exact path='/tasksTable' element={<TasksTable/>} />



             </Routes>
       </BrowserRouter>
  );
}

export default App;



