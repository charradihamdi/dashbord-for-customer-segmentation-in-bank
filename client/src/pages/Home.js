import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Log from "../components/Log";
import './style.css'

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {uid ?   
      <div className=""> 
      <section class="" id="intro">
			<div class="">
				<h2>CUSTOMER CHURN AND SEGMENTATION ANALYTICS OF BANK</h2>
				
				<div class="row">
					<div class="col-sm-4">
						
					</div>	
				</div>
			</div>
		</section>
    <div className="features">Machine Learning Models Comparison <span className="spanName">(Churn Classification )</span> and Feature Selection </div>
    <iframe title="Visualize Accuracy" width="1140" height="1100" src="https://app.powerbi.com/reportEmbed?reportId=d76d0dcb-586d-4872-a6d9-382f4e7678f8&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
      
       : <Log signin={true} signup={false} />}
        </div>
        
      </div>
     
    </div>
  );
};

export default Home;
