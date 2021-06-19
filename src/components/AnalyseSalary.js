import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const AnalyseSalary = () => {
  const history = useHistory();
  return (
    <div className="newCadre">
      <h3>
        <BiArrowBack
          size={40}
          className="backArrow"
          onClick={() => history.push("/")}
        />
        Analyse Salary
      </h3>
      <div className="pageForm mt-2">
        <form>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <label htmlFor="">Cadre</label>
              <select className="form-control">
                <option value="manager">Manager</option>
                <option value="manager2">Manager 2</option>
              </select>
            </div>
            <div className="col-md-12 col-lg-6">
              <label htmlFor="salary">Salary</label>
              <input type="number" className="form-control" id="salary" />
            </div>
          </div>
        </form>
        <h3 className="mt-4">Result</h3>
        <div className="analysisResult">
          <div>Cadre: Manager</div>
          <div>Net Salary: $25,000</div>
          <h5 className="my-2 fst-italic">Deductions</h5>
          <div className="deductions">
            <div>Deduction #1: -4000</div>
            <div>Deduction #2: -4000</div>
            <div>Deduction #3: -4000</div>
          </div>
          <div className="gross mt-3">Gross Salary: $20,000</div>
        </div>
        <div className="mt-3">
          <button className="greenButton">Analyse</button>
        </div>
      </div>
    </div>
  );
};

export default AnalyseSalary;
