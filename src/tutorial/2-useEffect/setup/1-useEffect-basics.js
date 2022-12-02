import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // Note：
  // useEffect是一个hook，hook是不能包裹在条件语句中的
  // 解决方案1.是在hook里面使用条件
  // useEffect(() => {
  //   console.log('call useEffect');
  //   if (value > 1) {
  //     document.title = `New Messages(${value})`;
  //   }
  // });
  // 解决方案2.是在hook里面使用条件
  // second parameter为[]，只在初始渲染的时候调用useEffect，此后re-render都不调用，如果不设置second parameter，组件每次re-render，useEffect都调用.
  // 每次value改变的时候调用
  useEffect(() => {
    console.log('call useEffect');
    document.title = `New Messages(${value})`;
  },[value]);
  console.log('render component');
  // 一个组件中可以加入多个useEffect
  useEffect(() => {
    console.log('hello world')
  },[]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click
      </button>
    </>
  );
};

export default UseEffectBasics;
