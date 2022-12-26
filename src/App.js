import React, { useState, useEffect, createContext } from 'react';
import Timer from './Timer';
import Records from './Records';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
export const RecordsContext = createContext();
function App() {
  const [records, setRecords] = useState([]);

  return (
    <main>
      <RecordsContext.Provider value={{ records, setRecords }}>
        <Timer />
        <Records />
      </RecordsContext.Provider>
    </main>
  );
}
export default App;
