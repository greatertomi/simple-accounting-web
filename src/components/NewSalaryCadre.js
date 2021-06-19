import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { FiXCircle } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";

const NewSalaryCadre = () => {
  const [formData, setFormData] = useState({
    cadreName: "",
    deductions: [
      {
        name: "",
        amount: "",
      },
    ],
  });
  const history = useHistory();

  const handleAddDeduction = (e) => {
    e.preventDefault();
    const deductions = [...formData.deductions, { name: "", amount: "" }];
    setFormData({ ...formData, deductions });
  };

  const removeDeduction = (index) => {
    const newDeductions = [...formData.deductions];
    newDeductions.splice(index, 1);
    setFormData({ ...formData, deductions: newDeductions });
  };

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (["name", "amount"].includes(name)) {
      const deductions = [...formData.deductions];
      deductions[dataset.id][name] = value;
      setFormData({ ...formData, deductions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    history.push({
      pathname: "/",
      state: { cadreCreated: true },
    });
    console.log("submitting ->", formData);
  };

  return (
    <div className="newCadre">
      <h3>
        <BiArrowBack
          size={40}
          className="backArrow"
          onClick={() => history.push("/")}
        />
        New Salary Cadre
      </h3>
      <div className="pageForm mt-2">
        <form>
          <div>
            <label htmlFor="cadreName">Cadre Name</label>
            <input
              type="text"
              className="form-control"
              id="cadreName"
              value={formData.cadreName}
              onChange={handleChange}
              name="cadreName"
            />
          </div>
          <h4 className="mt-4 fst-italic">Deductions</h4>
          {formData.deductions.map(({ name, amount }, index) => (
            <div
              className="d-flex align-items-center mt-3"
              key={`input${index}`}
            >
              <div className="me-2">
                <label htmlFor="deductionName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="deductionName"
                  value={name}
                  onChange={handleChange}
                  data-id={index}
                  name="name"
                />
              </div>
              <div className="me-2">
                <label htmlFor="deductionAmount">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="deductionAmount"
                  value={amount}
                  onChange={handleChange}
                  data-id={index}
                  name="amount"
                />
              </div>
              <div>
                <FiXCircle
                  size={30}
                  className="formCancel"
                  onClick={() => removeDeduction(index)}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-link" onClick={handleAddDeduction}>
            Add deduction
          </button>
        </form>

        <button className="greenButton mt-4" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};
// purpleButton

export default NewSalaryCadre;
