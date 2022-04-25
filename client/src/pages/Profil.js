import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Thread from '../components/Thread'
import Trends from "../components/Trends";
const Profil = () => {
  const uid = useContext(UidContext);
const clusters =()=>{
  return (
    <div className="main"> 
    <div className="trending-container">
    <h4>cluster1</h4>
    <h3 style={{color:"white"}}>this cluster  is focused on the capital and its suburbs it contain client with most transaction .</h3>
  </div>

  <div className="trending-container">
    <h4>cluster2</h4>
    <h3 style={{color:"white"}}>details....</h3>
  </div>

  <div className="trending-container">
    <h4>cluster3</h4>
    <h3 style={{color:"white"}}>this cluster  is focused on the east coast it contain client with the second  most transaction .</h3>
  </div>

  <div className="trending-container">
    <h4>cluster4</h4>
    <h3 style={{color:"white"}}>this cluster  is focused on the middle and north it contain the least amount of client and least amount of transactions  .</h3>
  </div>
  </div>
    
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
