import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import CadreList from "./components/CadreList";
import {BiPencil} from 'react-icons/bi'

const App = () => {
  return (
    <div>
      <div className="app">
        <div className="leftSide">
          <div className="text-center">
            <div className='heading mb-2'>
              Accounting System
            </div>
            <div className='subHeading mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias beatae fuga quis.
            </div>
          </div>
          <div className="widgetDiv">
            <button className="widget">
              <BiPencil color="white" size={45} />
            </button>
            <span>Analyse a salary</span>
          </div>
        </div>
        <CadreList />
      </div>
    </div>
  );
}

export default App;
