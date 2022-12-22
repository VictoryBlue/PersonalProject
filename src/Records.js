import React from 'react';
import Tour from './Tour';
const Records = ({ records, setRecords }) => {
  return (
    <>
      {records.length > 0 &&
        records.map((record) => {
          return <div key={record.id}>{record.time}</div>;
        })}
    </>
  );
};

export default Records;
