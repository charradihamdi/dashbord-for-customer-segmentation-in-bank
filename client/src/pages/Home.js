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
          {uid ? (
            <div className="">
              <section class="" id="intro">
                <div class="">
                  <h2>CUSTOMER CHURN AND SEGMENTATION ANALYTICS OF BANK</h2>

                  <div class="row">
                    <div class="col-sm-4"></div>
                  </div>
                </div>
              </section>
              <div className="section2">
                <div className="col">
                  <h3>Data Analysis</h3>
                  <p>
                    • Size: 40MB<br></br>• Shape: 150K rows and 15 Columns{" "}
                    <br></br>• Platform: Azure MchineLearning STUDIO
                  </p>
                </div>
                <div className="col">
                  <h3>Default Prediction</h3>
                  <p>
                    • SUPPORT VECTOR MACHINE<br></br>• Logistique Regression{" "}
                    <br></br>• Average perceptron
                  </p>
                </div>
                <div className="col">
                  <h3>Data Visualization</h3>
                  <p>
                    • Azure MchineLearning studio <br></br>
                  </p>
                </div>
              </div>
              <article >  <div>
          <div >
             <p className=''>
              Pour filtrer les demandes de pret : les clients qui peuvent obtenir des credit ou qui doivent etre rejetees est un processus chronophage et lent.
              <br></br>
              L'automatisation  de ce processus est une solution qui engendre par la suite l’amélioration de l’activité financière et accroître l'efficacité des banques.
            </p>
          </div>
          <div >
             <p className='features'>
               <h4>Feature Engineering and using models Logistique Regression, Decision Tree, Random Forest</h4>
              <br></br>
              <p>
              We see that the most correlate variables are:
              <li>Loan Amount</li>
              <li>Applicant Income </li>
              <li>Co-applicant Income</li>
              <li>Credit History</li>
              <li>Loan Amount Term</li>

              </p>
            </p>
          </div>
          <div >
             <p className='picfeaut'>
               <h4></h4>
            </p>
          </div>
          <footer>
            
          </footer>
        </div></article>
            </div>
          ) : (
            <Log signin={true} signup={false} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
