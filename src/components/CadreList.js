import React from 'react';
import {useHistory} from 'react-router-dom';

import Cadre from "./Cadre";
import {IoAddOutline} from 'react-icons/io5'

const CadreList = () => {
  const history = useHistory();

  return (
    <div className="cadreListDiv">
      <h3>List of Salary cadres</h3>
      <Cadre />
      <Cadre />
      <Cadre />
      <div>
        <button className="downloadBtn" onClick={() => history.push('/new-cadre')}>
          <IoAddOutline color="white" size={30} />
          <span className="ml-4">Create New Cadre</span>
        </button>
      </div>
    </div>
  );
};

export default CadreList;
