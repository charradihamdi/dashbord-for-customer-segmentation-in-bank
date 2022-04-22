import React from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../components/AppContext';
import { useContext } from 'react';
const LeftNav = () => {
  const uid = useContext(UidContext);
  return (
    <div>
       {uid? <h1>
      <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' exact activeClassName="active-left-nav">
            <img src="./img/icons/home.svg" alt="home"/>
          </NavLink>
          <br/>
       
          <NavLink to='/profil' exact activeClassName="active-left-nav">
            <img src="./img/icons/user.svg" alt="home"/>
          </NavLink>
        </div>
      </div>
    </div>
    </h1>:<h1></h1>}
    </div>
   
   
  );
};

export default LeftNav;