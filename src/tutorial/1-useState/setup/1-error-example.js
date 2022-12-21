import React from 'react';
// title虽然改变了但是这个改变没有传达到模版上
// 如果需要传导到模版上，需要使用setState的方法，这样state一改变就会触发re-render，所以view也会跟着改变。
const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = "nothing change"
    console.log(title)
  };
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
