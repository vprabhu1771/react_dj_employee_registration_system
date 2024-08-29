// src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/auth/LogoutButton';
import { useAuth } from '../context/AuthContext';  // Import the useAuth hook

const NavBar = () => {
  const { isAuthenticated } = useAuth();  // Get the isAuthenticated value from AuthContext

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Employee Registration App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuthenticated && (  // Conditionally render if the user is authenticated
              <>
{/*                 <li className="nav-item"> */}
{/*                   <Link className="nav-link" to="/employees">Employees List view</Link> */}
{/*                 </li> */}
                <li className="nav-item">
                  <LogoutButton />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
