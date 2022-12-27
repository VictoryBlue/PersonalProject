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
              idx={records.length - i}
            />
          );
        })}
    </>
  );
};

export default Records;
