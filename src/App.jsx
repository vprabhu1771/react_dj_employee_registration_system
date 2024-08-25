import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTES } from './config/routes';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/auth/Login';

import EmployeeForm from './components/employee/Create';
import EmployeeList from './components/employee/List';
import EmployeeDetail from './components/employee/Detail';
import { EmployeeProvider } from './context/EmployeeContext'; // Import EmployeeProvider

import NavBar from './components/NavBar';

import './App.css'



function App() {
  return (
    <>
      <div>

      <AuthProvider>
        <BrowserRouter>
          
          <NavBar />

          <Routes>
              <Route path={ROUTES.HOME} element={<Login />} /> 

              <Route 
                path="/employees/create" 
                element={
                  <PrivateRoute>
                  <EmployeeForm />
                  </PrivateRoute>
                } 
              />

              {/* Wrap the Employee routes with EmployeeProvider */}
              <Route 
                path={ROUTES.EMPLOYEE_LIST} 
                element={
                  <PrivateRoute>
                    <EmployeeProvider>
                      <EmployeeList />
                    </EmployeeProvider>
                  </PrivateRoute>
                } 
              />

              <Route 
                path={ROUTES.EMPLOYEE_DETAIL(':id')}
                element={
                  <PrivateRoute>
                    <EmployeeProvider>
                      <EmployeeDetail />
                    </EmployeeProvider>
                  </PrivateRoute>
                } 
              />
              

          </Routes>

        </BrowserRouter>
      </AuthProvider>

      </div>
    </>
  )
}

export default App