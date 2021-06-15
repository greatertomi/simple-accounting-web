import React, {useState} from 'react';
import Cadre from "./Cadre";
import {IoAddOutline} from 'react-icons/io5'
import CreateCadreModal from '../modals/CreateCadreModal';

const CadreList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal)

  return (
    <div className="cadreListDiv">
      <h3>List of Salary cadres</h3>
      <Cadre />
      <Cadre />
      <Cadre />
      <div>
        <button className="downloadBtn" onClick={toggle}>
          <IoAddOutline color="white" size={30} />
          <span className="ml-4">Create New Cadre</span>
        </button>
      </div>
      <CreateCadreModal toggle={toggle} isOpen={modal} />
    </div>
  );
};

export default CadreList;
