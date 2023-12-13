import React from 'react';
import { Link } from 'react-router-dom';
import './DataNavbar.css';
import dataIcon from '../../images/icons/data-black.svg'; 
import pointIcon from '../../images/icons/point-gray.svg'; 
import userIcon from '../../images/icons/user-gray.svg'; 

function NavItem({ icon, label, className, to }) {
  return (
    <div className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <Link to={to}>
        <span>{label}</span>
      </Link>
    </div>
  );
}

function DataNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 수집" to="/cardListcollector" />
      <NavItem icon={pointIcon} label="잔액" to="/reward2" className="text-gray" />
      <NavItem icon={userIcon} label="사용자" to="/user2" className="text-gray" />
    </div>
  );
}

export default DataNavbar;