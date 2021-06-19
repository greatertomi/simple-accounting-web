import React from "react";
import { useToasts } from "react-toast-notifications";

const CustomToast = () => {
  const { addToast } = useToasts();
  const show = true;

  const showAlert = () => {
    addToast("New cadre created successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  return <div>{show && showAlert()}</div>;
};

export default CustomToast;
