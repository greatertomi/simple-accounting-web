import React from "react";
import { useHistory } from "react-router-dom";

import Cadre from "./Cadre";
import { IoAddOutline } from "react-icons/io5";
import { CADRES } from "../mocks/cadres";

const CadreList = () => {
  const history = useHistory();
  const cadres = CADRES;

  return (
    <div className="cadreListDiv">
      <h3>List of Salary cadres</h3>
      {cadres.map(({ id, cadreName, deductions }) => (
        <Cadre key={id} cadreName={cadreName} deductions={deductions} />
      ))}
      {cadres.length === 0 && <div>No cadre created yet</div>}
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
