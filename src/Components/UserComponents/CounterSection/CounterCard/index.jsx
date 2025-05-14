import React from 'react';
import CountUp from 'react-countup';
import "./style.css";
import { formatNumber } from '../../../../Utils/helper';

const CounterCard = ({ data, isVisible }) => {
  const { value, symbol, label } = data;

  return (
    <div className="counter-content flex-grow-1 text-center py-3">
      <div className="counter fw-bold mb-3">
        {isVisible ? (
          <CountUp start={0} end={value} duration={2} formattingFn={(value) => formatNumber(value)} />
        ) : (
          0
        )}
        {symbol}
      </div>
      <h3 className="text-uppercase mb-0">{label}</h3>
    </div>
  );
};

export default CounterCard;
