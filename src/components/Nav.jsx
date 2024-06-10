import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav({ onReset }) {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onReset) {
      onReset(); 
    }
    navigate('/'); 
  };

  return (
    <div>
      <header className="bg-cyan-300 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kai Kai React - Assessment</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" onClick={handleHomeClick}>Home</a>
            </li>
            <li>
              <Link to='/Owner'>Owner</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
