import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import CadreList from "./components/CadreList";

const App = () => {
  return (
    <div className="app">
      <div className="leftSide">
        This contains the left
      </div>
      <CadreList />
    </div>
  );
}

export default App;
