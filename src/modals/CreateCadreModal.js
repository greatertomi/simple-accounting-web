import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {FiXCircle} from 'react-icons/fi';

const CreateCadreModal = ({isOpen, toggle}) => {
  const [deductions, setDeductions] = useState([
    {
      name: 'cat',
      amount: 5000
    },
    {
      name: 'rat',
      amount: 15000
    }
  ])
  const handleAddDeduction = () => {
    setDeductions([...deductions, {name: '', amount: ''}]);
  }

  const handleOnChange = () => {

  }

  const renderForm = () => {
    return (
      <form>
        <div>
          <label htmlFor="cadreName">Cadre Name</label>
          <input type="text" className="form-control" id="cadreName" />
        </div>
        <h4 className="mt-4 fst-italic">Deductions</h4>
        {deductions.map(({name, amount}, index) => (
          <div className="d-flex align-items-center mt-3" key={'form' + index}>
            <div className="me-2">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={name} onChange={handleOnChange} />
            </div>
            <div className="me-2">
              <label htmlFor="salary">Amount</label>
              <input type="number" className="form-control" id="salary" value={amount} onChange={handleOnChange} />
            </div>
            <div>
              <FiXCircle size={30} className="formCancel"/>
            </div>
          </div>
        ))}
        <button className="btn btn-link" onClick={handleAddDeduction}>Add deduction</button>
      </form>
    )
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="customModal">
      <ModalHeader toggle={toggle}>Analyse Salary</ModalHeader>
      <ModalBody>
        {renderForm()}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateCadreModal;
