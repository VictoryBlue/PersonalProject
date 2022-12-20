import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState('Default Name');

  useEffect(() => {
    const newPerson = data.find((person) => person.id === +id);
    setName(newPerson.name);

    console.log('start');
    // 卸载组件就是组件从页面上消失
    return () => console.log('end');
  });

  return (
    <div>
      <h2>person {name}</h2>
      <Link to="/people">Back to People</Link>
    </div>
  );
};

export default Person;
