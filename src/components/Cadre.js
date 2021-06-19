import React from "react";
import NumberFormat from "react-number-format";

const Cadre = ({ cadreName, deductions }) => {
  return (
    <div className="cadreDiv mb-4">
      <h5 className="font-weight-bolder">{cadreName}</h5>
      {deductions.map(({ _id, name, amount }) => (
        <div className="smallText" key={_id}>
          {name} (&#8358;
          <NumberFormat value={amount} displayType="text" thousandSeparator />)
        </div>
      ))}
    </div>
  );
};

export default Cadre;
