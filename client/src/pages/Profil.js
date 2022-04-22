import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
    <LeftNav />
    <div className="main">
      <div className="home-header">
      {uid ?  <h1>clusters</h1>: <Log signin={true} signup={false} />}
      </div>
      
    </div>
   
  </div>
  );
};

export default Profil;
