import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  const [name, setName] = useState('peter');
  const [Age, setAge] = useState(24);
  const [Message, setMessage] = useState('random message');
  // Note:仅仅改变message的值，需要将person传入后重新覆盖旧的message
  // const chagneMessage = () => {
  //   setPerson({ ...person, message: 'Hello world' });
  // };
  const chagneMessage = ()=>{
    setMessage('Hello world');
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{Age}</h3>
      <h3>{Message}</h3>
      <button className="btn" onClick={chagneMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
