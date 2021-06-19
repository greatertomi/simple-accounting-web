import React, { useEffect } from "react";
import { BiPencil } from "react-icons/bi";
import { useHistory, useLocation } from "react-router-dom";

import CadreList from "./CadreList";
import { useToasts } from "react-toast-notifications";

const Landing = () => {
  const history = useHistory();
  const location = useLocation();
  const { addToast } = useToasts();

  const showToastedNote = (content, type) => {
    addToast(content, {
      appearance: type,
      autoDismiss: true,
    });
  };

  useEffect(() => {
    if (location.state?.cadreCreated) {
      showToastedNote("New cadre created successfully", "success");
      history.replace("/");
    }
  }, []);

  return (
    <div className="landing">
      <div className="leftSide">
        <div className="text-center">
          <div className="heading">Accounting System</div>
          <div className="subHeading mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias
            beatae fuga quis.
          </div>
        </div>
        <div className="widgetDiv">
          <button className="widget" onClick={() => history.push("/analyse")}>
            <BiPencil color="white" size={45} />
          </button>
          <span>Analyse a salary</span>
        </div>
      </div>
      <CadreList />
    </div>
  );
};

export default Landing;
