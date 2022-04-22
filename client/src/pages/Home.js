import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Log from "../components/Log";


const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {uid ?  <iframe title="end_to_end" width="1140" height="719" src="https://app.powerbi.com/reportEmbed?reportId=62211662-986d-428f-a892-2837ae545b2b&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe> : <Log signin={true} signup={false} />}
        </div>
        
      </div>
     
    </div>
  );
};

export default Home;
