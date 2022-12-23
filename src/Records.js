import React from 'react';
import SingleRecord from './SingleRecord';

const Records = ({ records, setRecords }) => {
  return (
    <>
      {records.length > 0 &&
        records.map((record) => {
          return (
            <SingleRecord key={record.id}
              record={record}
              records={records}
              setRecords={setRecords}/>

            // <div className="record" key={record.id}>
            //   <span>{record.time / 1000}s</span>
            //   <button
            //     className="delBtn"
            //     onClick={() => {
            //       handleDelete(record);
            //     }}
            //   >
            //     删除
            //   </button>
            // </div>
          );
        })}
    </>
  );
};

export default Records;
