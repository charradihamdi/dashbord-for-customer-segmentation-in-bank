import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Thread from '../components/Thread'
import Trends from "../components/Trends";

const Profil = () => {
  const uid = useContext(UidContext);

  
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {uid ?  <iframe title="custemer analytics inBank" width="1170" height="719" src="https://app.powerbi.com/reportEmbed?reportId=a4415cff-4345-4aad-a307-3f65dd1c7ef0&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"  frameborder="0" allowFullScreen="true"></iframe> : <Log signin={true} signup={false} />}
        </div>
        
      </div>
     
    </div>
  );
};

export default Profil;
