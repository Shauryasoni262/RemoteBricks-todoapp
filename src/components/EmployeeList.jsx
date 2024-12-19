import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../store/employeeSlice';
import '../styles/EmployeeList.css';

export default function EmployeeList() {
  const dispatch = useDispatch();
  const { data: employees, status } = useSelector(state => state.employees);

  useEffect(() => {

    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  if (status === 'failed') return <p className="error-message">Failed to fetch employees. Please try again later.</p>;

  return (
    <div className="employee-container">
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <div className="employee-info">
              <span className="employee-name">{employee.firstName} {employee.lastName}</span>
              <span className="employee-role">{employee.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
