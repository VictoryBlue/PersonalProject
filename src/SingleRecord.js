const SingleRecord = ({ record, records, setRecords }) => {
  const handleDelete = (record) => {
    setRecords(
      records.filter((r) => {
        return r.id !== record.id;
      })
    );
  };
  return (
    <div className="record">
      {console.log(record.time)}
      <span>{record.time / 1000}s</span>
      <button
        className="delBtn"
        onClick={() => {
          handleDelete(record);
        }}
      >
        删除
      </button>
    </div>
  );
};

export default SingleRecord;
