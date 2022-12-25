import SingleRecord from './SingleRecord';
import { useContext } from 'react';
import { RecordsContext } from './App';
const Records = () => {
  const { records, setRecords } = useContext(RecordsContext);
  return (
    <>
      {records.length > 0 &&
        records.map((record, i) => {
          return (
            <SingleRecord
              key={record.id}
              record={record}
              idx={i}
            />

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
