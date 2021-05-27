import React, {useState} from 'react';
import Cadre from "./Cadre";
import {IoAddOutline} from 'react-icons/io5'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const CadreList = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal)

  const handleClick = (e) => {
    e.preventDefault();
    console.log('handle click');
  }

  const renderModal = () => (
    <Modal isOpen={modal} toggle={toggle} className="customModal">
      <ModalHeader toggle={toggle}>Analyse Salary</ModalHeader>
      <ModalBody>
        <form>
          <div>
            <label htmlFor="cadreName">Cadre Name</label>
            <input type="text" className="form-control" id="cadreName" />
          </div>
          <h4 className="mt-4 fst-italic">Deductions</h4>
          <div className="d-flex">
            <div className="me-2">
              <label htmlFor="salary">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div>
              <label htmlFor="salary">Amount</label>
              <input type="number" className="form-control" id="salary" />
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
