import React, { useState, useEffect } from 'react';

import Timer from './Timer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  // const [records, setRecord] = useState([]);
  // Note:第二个参数是空数组的时候，也是render完成后在调用fetchTours

  return (
    <main>
      <Timer />
    </main>
  );
}

export default App;
