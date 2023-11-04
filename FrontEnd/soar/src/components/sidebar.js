import React from 'react';
import { useLocation } from 'react-router-dom';

//css 
import '../css/sidebar.css';
import '../css/variables.css'

//images
import soar_logo from '../images/soar.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar-header">
          <img
            className="soar_logo"
            src={soar_logo}
            alt="logo"
          />
        </div>
        <ul className="list-unstyled components navLinks">
          <li id='dashact'>
            <a href="/Dashboard" className={location.pathname === '/Dashboard' ? 'active' : ''}>Dashboard</a>
          </li>
          <li>
            <a href="/Conversations" className={location.pathname === '/Conversations' ? 'active' : ''}>Conversations</a>
          </li>
          <li>
            <a href="/Profile" className={location.pathname === '/Profile' ? 'active' : ''}>Profile</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
