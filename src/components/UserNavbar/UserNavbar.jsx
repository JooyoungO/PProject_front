// import React from 'react';
// import './UserNavbar.css';
// import { Link } from 'react-router-dom';
// import dataIcon from '../../images/icons/data-gray.svg'; 
// import pointIcon from '../../images/icons/point-gray.svg'; 
// import userIcon from '../../images/icons/user-black.svg'; 

// function NavItem({ icon, label, className, to }) {
//   return (
//     <div className={`nav-item ${className}`}>
//       {icon && <img src={icon} alt={label} className="nav-icon" />}
//       <Link to={to}>
//         <span>{label}</span>
//       </Link>
//     </div>
//   );
// }

// function UserNavbar() {
//   return (
//     <div className="nav-bar">
//       <NavItem icon={dataIcon} label="데이터 수집" className="text-gray" to="/CardListCollector"/>
//       <NavItem icon={pointIcon} label="잔액" className="text-gray" to="/Reward2"/>
//       <NavItem icon={userIcon} label="사용자" to="/User2"/>
//     </div>
//   );
// }

// export default UserNavbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';
import dataIcon from '../../images/icons/data-gray.svg'; 
import pointIcon from '../../images/icons/point-gray.svg'; 
import userIcon from '../../images/icons/user-black.svg'; 

function NavItem({ icon, label, className, to }) {
  return (
    <Link to={to} className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <span>{label}</span>
      </Link>
  );
}

function UserNavbar() {
  return (
    <div className="nav-bar">
       <NavItem icon={dataIcon} label="데이터 수집" className="text-gray" to="/CardListCollector"/>
       <NavItem icon={pointIcon} label="잔액" className="text-gray" to="/Reward2"/>
       <NavItem icon={userIcon} label="사용자" to="/User2"/>
    </div>
  );
}

export default UserNavbar;