import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const CreateCadreModal = ({isOpen, toggle}) => {
  const handleAddDeduction = () => {
    console.log('deduction');
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="customModal">
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
          <button className="btn btn-link" onClick={handleAddDeduction}>Add deduction</button>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateCadreModal;
