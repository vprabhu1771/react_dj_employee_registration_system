import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/auth/Login';

import EmployeeList from './components/employee/List';
import EmployeeDetail from './components/employee/Detail';
import { EmployeeProvider } from './context/EmployeeContext'; // Import EmployeeProvider

import './App.css'


function App() {
  return (
    <>
      <div>

        <BrowserRouter>

          <Routes>
              <Route path="/" element={<Login />} />              

              {/* Wrap the Employee routes with EmployeeProvider */}
              <Route 
            path="/employees" 
            element={
              <EmployeeProvider>
                <EmployeeList />
              </EmployeeProvider>
            } 
          />
          <Route 
            path="/employees/:id" 
            element={
              <EmployeeProvider>
                <EmployeeDetail />
              </EmployeeProvider>
            } 
          />
              

          </Routes>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App