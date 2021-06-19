import React, { useCallback, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useToasts } from "react-toast-notifications";

const AnalyseSalary = () => {
  const history = useHistory();
  const [cadres, setCadres] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    cadre: "",
    salary: "",
  });
  const { addToast } = useToasts();

  const showToastedNote = (content, type) => {
    addToast(content, {
      appearance: type,
      autoDismiss: true,
    });
  };

  const fetchCadres = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/cadres`);
      const [cadre] = res.data;
      setFormData({ ...formData, cadre: cadre._id });
      setCadres(res.data);
    } catch (err) {
      showToastedNote("Error occurred while fetching data.", "error");
    }
  }, []);

  useEffect(() => {
    fetchCadres();
  }, [fetchCadres]);

  const analyzeSalary = (type, id = null) => {
    if (type === "analyse") {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  };

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
                {cadres.map(({ _id, cadreName }) => (
                  <option key={_id} value={_id}>
                    {cadreName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-12 col-lg-6">
              <label htmlFor="salary">Salary</label>
              <input type="number" className="form-control" id="salary" />
            </div>
          </div>
        </form>
        {showResult && (
          <div>
            <h3 className="mt-4">Result</h3>
            <div className="analysisResult">
              <div>Cadre: Manager</div>
              <div>Gross Salary: &#8358;25,000</div>
              <h5 className="my-2 fst-italic">Deductions</h5>
              <div className="deductions">
                <div>Deduction #1: -4000</div>
                <div>Deduction #2: -4000</div>
                <div>Deduction #3: -4000</div>
              </div>
              <div className="gross mt-3">Net Salary: &#8358;20,000</div>
            </div>
          </div>
        )}
        <div className="mt-3">
          <button
            className="greenButton"
            onClick={() => analyzeSalary("analyse")}
          >
            Analyse
          </button>
          {showResult && (
            <button
              className="greyButton ms-4"
              onClick={() => analyzeSalary("refresh")}
            >
              Refresh
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyseSalary;
