import React, { useEffect } from 'react';

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => setAlert(''), 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      {alert === 'submit' && <h2>item added to the list</h2>}
      {alert === 'edit' && <h2>edit item</h2>}
      {alert === 'clear' && <h2>delete item</h2>}
    </>
  );
};

export default Alert;
