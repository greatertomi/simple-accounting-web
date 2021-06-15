import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {FiXCircle} from 'react-icons/fi';
import {BiArrowBack} from 'react-icons/bi';

const NewSalaryCadre = () => {
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

  const handleChange = () => {

  }

  const history = useHistory();
  return (
    <div className="newCadre">
      <h3>
        <BiArrowBack size={40} className="backArrow" onClick={() => history.push('/')} />
        New Salary Cadre
      </h3>
      <div className="pageForm mt-2">
        <form>
          <div>
            <label htmlFor="cadreName">Cadre Name</label>
            <input type="text" className="form-control" id="cadreName" />
          </div>
          <h4 className="mt-4 fst-italic">Deductions</h4>
          {deductions.map(({name, amount}, index) => (
            <div className="d-flex align-items-center mt-3">
              <div className="me-2">
                <label htmlFor="deductionName">Name</label>
                <input type="text" className="form-control" id="deductionName" value={name}
                  onChange={handleChange}/>
              </div>
              <div className="me-2">
                <label htmlFor="deductionAmount">Amount</label>
                <input type="number" className="form-control" id="deductionAmount" value={amount}
                  onChange={handleChange}/>
              </div>
              <div>
                <FiXCircle size={30} className="formCancel"/>
              </div>
            </div>
          ))}
          <button className="btn btn-link" onClick={handleAddDeduction}>Add deduction</button>
          <button className="purpleButton">Save</button>
        </form>
      </div>
    </div>
  );
};

export default NewSalaryCadre;
