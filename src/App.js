import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import CadreList from "./components/CadreList";
import {BiPencil} from 'react-icons/bi'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const App = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal)

  const renderModal = () => (
    <Modal isOpen={modal} toggle={toggle} className="customModal">
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
  )

  return (
    <div>
      <div className="app">
        <div className="leftSide">
          <div className="text-center">
            <div className='heading mb-2'>
              Accounting System
            </div>
            <div className='subHeading mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias beatae fuga quis.
            </div>
          </div>
          <div className="widgetDiv">
            <button className="widget" onClick={toggle}>
              <BiPencil color="white" size={45} />
            </button>
            <span>Analyse a salary</span>
          </div>
        </div>
        <CadreList />
      </div>
      {renderModal()}
    </div>
  );
}

export default App;
