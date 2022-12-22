import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [isPlus, setIsPlus] = useState(true);
  const [subInfo, setSubInfo] = useState('');
  const plus = () => {
    setIsPlus(false);
    setSubInfo(info);
  };
  const minus = () => {
    setIsPlus(true);
    setSubInfo('');
  };
  return (
    <article className="question">
      <h4 style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
        {title}
        {isPlus ? (
          <button className="btn" onClick={plus}>
            <AiOutlinePlus />
          </button>
        ) : (
          <button className="btn" onClick={minus}>
            <AiOutlineMinus />
          </button>
        )}
      </h4>
      <p>{subInfo}</p>
    </article>
  );
};

export default Question;
