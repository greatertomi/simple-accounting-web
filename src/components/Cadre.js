import React from 'react';

const Cadre = () => {
  return (
    <div className="cadreDiv mb-4">
      <h5 className="font-weight-bolder">Shalom Chioma</h5>
      <div className="font-italic">976 new road, kilcome, waterford</div>
      <div className="footer">
        <div className="d-flex mr-4">
          {/*<IosMailOutline color="#C2C5D6" />*/}
          <span>Brad@gmail.com</span>
        </div>
        <div className="d-flex mr-4">
          {/*<IosPhonePortrait color="#C2C5D6" />*/}
          <span>010-234-3849</span>
        </div>
        <div>
          <button className="arrowBtn">
            {/*<MdArrowRoundForward color="white" />*/}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cadre;