import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  console.log(userData)
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              {/* <img src="./img/_logo.png" alt="icon" /> */}
              <h3>Keyrus</h3>
            </div>
          </NavLink>
        </div>
        {
        uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/home">
                <h5>Bienvenue {userData.pseudo} </h5>
              </NavLink>
            </li>
            <li className="welcome">
           
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/icons/login.svg" alt="login"/>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
