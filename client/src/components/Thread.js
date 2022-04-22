import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isEmpty } from "./Utils";
import Trends from "../components/Trends";

const Thread = () => {

  return (
      <div className="thread-container">
        <div className="right-side">
          <div className="right-side-container">
            <div className="wrapper">
              <Trends />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Thread;
