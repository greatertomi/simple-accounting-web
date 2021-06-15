import React, {useState} from 'react';
import Cadre from "./Cadre";
import {IoAddOutline} from 'react-icons/io5'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import {FiXCircle} from 'react-icons/fi'

const CadreList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal)

  const handleClick = (e) => {
    e.preventDefault();
    console.log('handle click');
  }

  const renderModal = () => (
    <Modal isOpen={showModal} toggle={toggle} className="customModal">
      <ModalHeader toggle={toggle}>Analyse Salary</ModalHeader>
      <ModalBody>
        <form>
          <div>
            <label htmlFor="cadreName">Cadre Name</label>
            <input type="text" className="form-control" id="cadreName" />
          </div>
          <h4 className="mt-4 fst-italic">Deductions</h4>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <label htmlFor="salary">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div>
              <label htmlFor="salary">Amount</label>
              <input type="number" className="form-control" id="salary" />
            </div>
            <div>
              <FiXCircle size={30} className="formCancel"/>
            </div>
          </div>
          <button className="btn btn-link" onClick={handleClick}>Add deduction</button>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )

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
      {renderModal()}
    </div>
  );
};

export default CadreList;
