import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  // Note:仅仅改变message的值，需要将person传入后重新覆盖旧的message
  const chagneMessage = () => {
    setPerson({ ...person, message: 'Hello world' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={chagneMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
