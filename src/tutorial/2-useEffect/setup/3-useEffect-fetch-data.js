import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // async函数可以单独写在useEffect外面，或者回调函数里面，但是不要把回调函数写成async，因为回调函数返回的是cleanUp function，而async返回的是promise
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);//触发re-render 进而触发useEffect
  };
  // Note:这里一定要加[]，否则将陷入无限的循环请求
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
