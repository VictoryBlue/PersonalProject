import { useState, useReducer, useContext } from 'react';
import { reducer } from './Reducer';
import Records from './Records';
import initialState from './initialState';
import { RecordsContext } from './App';

const Timer = () => {
  const { records, setRecords } = useContext(RecordsContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [records, setRecords] = useState([]);

  return (
    <div>
      <h1 className="timerTitle">
        <span className="TimerDiff">{state.timeDiff / 1000}s</span>
        {records.length != 0 && (
          <span className="TimerDiff">
            {records.reduce((pre, cur) => {
              return pre + cur.time;
            }, 0) / 1000}
            s
          </span>
        )}
      </h1>
      <div className="Timer">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: 'runTimer' });
          }}
        >
          {state.isPause ? '开始' : '暂停'}
        </button>

        <button
          className="btn"
          onClick={() => {
            setRecords([
              ...records,
              {
                id: records.length,
                time: state.timeDiff,
              },
            ]);

            dispatch({ type: 'add' });
          }}
        >
          添加
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          重置
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: 'clear' });
            setRecords([]);
          }}
        >
          清空
        </button>
      </div>
    </div>
  );
};

export default Timer;
