import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import './App.scss';
import Landing from './components/Landing';
import NewSalaryCadre from './components/NewSalaryCadre';
import AnalyseSalary from './components/AnalyseSalary';

const App = () => {
  return (
    <BrowserRouter className="app">
      <Route path="/" exact component={Landing} />
      <Route path="/new-cadre" exact component={NewSalaryCadre} />
      <Route path="/analyse" exact component={AnalyseSalary} />
    </BrowserRouter>
  );
}

export default App;
