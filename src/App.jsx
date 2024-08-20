import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/auth/Login';

import EmployeeList from './components/employee/List';
import EmployeeDetail from './components/employee/Detail';

import './App.css'


function App() {
  return (
    <>
      <div>

        <BrowserRouter>

          <Routes>
              <Route path="/" element={<Login />} />              

                <Route path="/employees" element={<EmployeeList />} />
                
                <Route path="/employees/:id" element={<EmployeeDetail />} />
          </Routes>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App