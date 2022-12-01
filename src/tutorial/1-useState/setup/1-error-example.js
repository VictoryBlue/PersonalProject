import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {};
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        my button
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
