import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Thread from '../components/Thread'
const Profil = () => {
  const uid = useContext(UidContext);
const clusters =()=>{
  return (
<form action=""  id="sign-up-form">
      <label htmlFor="email">CustomerId</label>
      <br />
      <input
        type="text"
        name="CustomerId"
        id="email"
      />
      <br />
      <label htmlFor="password">Account Id</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"

      />
      <div className="password error"></div>
      <br />
      <input type="showResult" value="show result" />
     
    </form>
    
    )
}
  return (
    <div className="home">
    <LeftNav />
    <div className="main">
      <div className="home-header">
      {uid ? <div>{clusters()}</div>: <Log signin={true} signup={false} />}
      </div>
      
    </div>
   
  </div>
  );
};

export default Profil;
