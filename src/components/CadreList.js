import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Cadre from "./Cadre";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const CadreList = () => {
  const history = useHistory();
  const [cadres, setCadres] = useState([]);

  const fetchCadres = useCallback(async () => {
    const res = await axios.get(`${BASE_URL}/cadres`);
    setCadres(res.data);
  }, []);

  useEffect(() => {
    fetchCadres();
  }, [fetchCadres]);

  return (
    <div className="cadreListDiv">
      <h3>List of Salary cadres</h3>
      {cadres.map(({ _id, cadreName, deductions }) => (
        <Cadre key={_id} cadreName={cadreName} deductions={deductions} />
      ))}
      {cadres.length === 0 && <div className="mt-3">No cadre created yet</div>}
      <div>
        <button
          className="downloadBtn mt-4"
          onClick={() => history.push("/new-cadre")}
        >
          <IoAddOutline color="white" size={30} />
          <span className="ml-4">Create New Cadre</span>
        </button>
      </div>
    </div>
  );
};

export default CadreList;
