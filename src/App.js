import React, { useState, useEffect, createContext } from 'react';
import Timer from './Timer';
import Records from './Records';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const RecordsContext = createContext();
function App() {
  const [records, setRecords] = useState([]);
  // Note:第二个参数是空数组的时候，也是render完成后在调用fetchTours

  return (
    <main>
      <RecordsContext.Provider value={{ records, setRecords }}>
        <Timer />
        <Records />
      </RecordsContext.Provider>
    </main>
  );
}
export { RecordsContext, App };
