import { useContext } from 'react';
import { RecordsContext } from './App';
const SingleRecord = ({ record, idx }) => {
  const { records, setRecords } = useContext(RecordsContext);

  const handleDelete = (record) => {
    setRecords(
      records.filter((r) => {
        return r.id !== record.id;
      })
    );
  };
  const handleEdit = (e, record) => {
    e.preventDefault();
    const inputTime = e.target.querySelector('#time');
    record = { id: record.id, time: Number(inputTime.value) * 1000 };

    records.forEach((r, i) => {
      if (r.id === record.id) records[i] = record;
    });

    setRecords(Array.from(records));
    e.target.reset();
  };
  return (
    <div className="record">
      <div className="info">
        <span className="recordIdx">{idx}</span>
        <span>{record.time / 1000}s</span>
      </div>
      <div>
        <form onSubmit={(e) => handleEdit(e, record)}>
          <input
            id="time"
            type="number"
            name="time"
            step="0.1"
            placeholder="小数位后一位/s"
            required={true}
          />
          <button type="submit" className="itemBtn">
            更改
          </button>
          <button
            className="itemBtn"
            onClick={() => {
              handleDelete(record);
            }}
          >
            删除
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecord;
