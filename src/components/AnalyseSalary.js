import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useToasts } from "react-toast-notifications";
import { useQuery } from "react-query";
import NumberFormat from "react-number-format";

const AnalyseSalary = () => {
  const history = useHistory();
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    cadre: "",
    salary: "",
  });
  const [currentCadre, setCurrentCadre] = useState({});
  const { addToast } = useToasts();

  const showToastedNote = (content, type) => {
    addToast(content, {
      appearance: type,
      autoDismiss: true,
    });
  };

  const { data } = useQuery("fetchTask", async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/cadres`);
      const [cadre] = data;
      setFormData({ ...formData, cadre: cadre._id });
      return data;
    } catch (err) {
      showToastedNote(
        "An error occurred while fetching data from server.",
        "error"
      );
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const analyzeSalary = (type) => {
    if (type === "analyse") {
      const [cadre] = data.filter((e) => e._id === formData.cadre);
      const totalDeduction = cadre.deductions.reduce((a, b) => a + b.amount, 0);
      cadre.netSalary = +formData.salary - totalDeduction;
      setCurrentCadre(cadre);
      setShowResult(true);
    } else {
      setFormData({ ...formData, salary: "" });
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
              <select
                className="form-control"
                name="cadre"
                value={formData.cadre}
                onChange={handleChange}
              >
                {data?.map(({ _id, cadreName }) => (
                  <option key={_id} value={_id}>
                    {cadreName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-12 col-lg-6">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                className="form-control"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        {showResult && (
          <div>
            <h3 className="mt-4">Result</h3>
            <div className="analysisResult">
              <div>Cadre: {currentCadre.cadreName}</div>
              <div>Gross Salary: &#8358;{formData.salary}</div>
              <h5 className="my-2 fst-italic">Deductions</h5>
              <div className="deductions">
                {currentCadre.deductions.map((e) => (
                  <div key={e._id}>
                    {e.name}: {e.amount}
                  </div>
                ))}
              </div>
              <div className="gross mt-3">
                Net Salary: &#8358;
                <NumberFormat
                  value={currentCadre.netSalary}
                  displayType="text"
                  thousandSeparator
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-3">
          {showResult ? (
            <button
              className="greyButton ms-4"
              onClick={() => analyzeSalary("refresh")}
            >
              Refresh
            </button>
          ) : (
            <button
              className="greenButton"
              onClick={() => analyzeSalary("analyse")}
            >
              Analyse
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyseSalary;
