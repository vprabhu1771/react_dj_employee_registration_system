import React, { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeList = () => {
    const { employees, setSelectedEmployee } = useContext(EmployeeContext);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id} onClick={() => setSelectedEmployee(employee)}>
                        {employee.first_name} {employee.last_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;