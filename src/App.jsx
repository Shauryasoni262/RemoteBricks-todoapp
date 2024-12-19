import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';
import SplashScreen from './components/SplashScreen';
import './styles/App.css';

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplashVisible(false);
    }, 1000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div className="app">
      {isSplashVisible ? (
        <SplashScreen />
      ) : (
        <Router>
          <header>
            <div className="company-name">RemoteBricks</div>
            <nav>
              <Link to="/" className="nav-link">Todo List</Link>
              <Link to="/employees" className="nav-link">Employee List</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/employees" element={<EmployeeList />} />
            </Routes>
          </main>
        </Router>
      )}
    </div>
  );
}
