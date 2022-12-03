import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
//Note:动态获取name，加上[]
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = {
        id: new Date().getTime().toString(),
        email: person.email,
        firstName: person.firstName,
        age: person.age,
      };
      setPeople((oldPeople) => {
        return [...oldPeople, newPerson];
      });
      setPerson({ firstName: '', email: '', age: '' });
    } else {
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {/* Note:从数组中生成JSX需要在html标签中加上key属性 */}
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
              <h4>{age}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
