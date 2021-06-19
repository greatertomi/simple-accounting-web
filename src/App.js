import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import "./App.scss";
import Landing from "./components/Landing";
import NewSalaryCadre from "./components/NewSalaryCadre";
import AnalyseSalary from "./components/AnalyseSalary";

const App = () => {
  return (
    <BrowserRouter className="app">
      <ToastProvider>
        <Route path="/" exact component={Landing} />
        <Route path="/new-cadre" exact component={NewSalaryCadre} />
        <Route path="/analyse" exact component={AnalyseSalary} />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
