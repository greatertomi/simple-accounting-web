import React from 'react';
import {IoArrowForward} from 'react-icons/io5';

const Cadre = () => {
  return (
    <div className="cadreDiv mb-4">
      <h5 className="font-weight-bolder">Manager</h5>
      <div className="font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit </div>
      <div className="footer">
        <div className="d-flex mr-4">
          <span>&#8358;50,000</span>
        </div>
        <div className="d-flex mr-4">
          <span>0102343849</span>
        </div>
        <div>
          <button className="arrowBtn">
            <IoArrowForward color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cadre;
