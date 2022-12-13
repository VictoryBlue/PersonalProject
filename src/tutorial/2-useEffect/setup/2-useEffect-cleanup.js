import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checksize = ()=>{
    setSize(window.innerWidth)
  }
  // Note:在渲染之后，在调用useEffect的回调之前，先执行useEffect的cleanUp函数，这可以避免增加过多的事件监听器。
  useEffect(()=>{
    console.log('useEffect')
    window.addEventListener('resize', checksize)
    return ()=>{
      console.log('cleanup')
      window.removeEventListener('resize', checksize)
    }
  })
  console.log('render')
  return (
    <>
    <h1>window</h1>
    <h2>{size}</h2>
    </>
  )
};

export default UseEffectCleanup;
