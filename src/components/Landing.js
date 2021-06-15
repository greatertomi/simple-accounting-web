import React from 'react';
import {BiPencil} from 'react-icons/bi';
import CadreList from './CadreList';
import {useHistory} from 'react-router-dom';

const Landing = () => {
  const history = useHistory();
  return (
    <div className="landing">
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
          <button className="widget" onClick={() => history.push('/analyse')}>
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
