import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import '../../assets/main.css';

const EmployeeList = () => {
    const { employees, setSelectedEmployee } = useContext(EmployeeContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Search logic including ID
    const filteredEmployees = employees.filter((employee) => {
        return (
            employee.id.toString().includes(searchTerm.toLowerCase()) ||
            employee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.gender.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Sorting logic
    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedEmployees.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle sorting when a header is clicked
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div>
            <h2>Employee List</h2>
            <Link to={ROUTES.EMPLOYEE_CREATE}>Create Employee</Link>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search employees by ID, name, email, or gender..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th onClick={() => requestSort('id')}>ID</th>
                        <th onClick={() => requestSort('first_name')}>First Name</th>
                        <th onClick={() => requestSort('last_name')}>Last Name</th>
                        <th onClick={() => requestSort('email')}>Email</th>
                        <th onClick={() => requestSort('gender')}>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                            <td>{row.email}</td>
                            <td>{row.gender}</td>
                            <td>
                                <Link
                                    to={ROUTES.EMPLOYEE_DETAIL(row.id)}
                                    onClick={() => setSelectedEmployee(row)}
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastItem >= sortedEmployees.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default EmployeeList;
