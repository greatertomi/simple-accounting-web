import React from "react";
import { useHistory } from "react-router-dom";

import Cadre from "./Cadre";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useToasts } from "react-toast-notifications";
import { useQuery } from "react-query";

const CadreList = () => {
  const history = useHistory();
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
      return data;
    } catch (err) {
      showToastedNote(
        "An error occurred while fetching data from server.",
        "error"
      );
    }
  });

  return (
    <div className="cadreListDiv">
      <h3>List of Salary cadres</h3>
      {data?.map(({ _id, cadreName, deductions }) => (
        <Cadre key={_id} cadreName={cadreName} deductions={deductions} />
      ))}
      {data?.length === 0 && <div className="mt-3">No cadre created yet</div>}
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
