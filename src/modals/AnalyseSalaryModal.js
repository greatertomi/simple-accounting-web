import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const AnalyseSalaryModal = ({isOpen, toggle}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="customModal">
      <ModalHeader toggle={toggle}>Analyse Salary</ModalHeader>
      <ModalBody>
        <form>
          <div>
            <label htmlFor="">Cadre</label>
            <select className="form-control">
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="salary">Salary</label>
            <input type="number" className="form-control" id="salary" />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Analyse</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default AnalyseSalaryModal;
