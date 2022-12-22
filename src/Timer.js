import { useState, useReducer } from 'react';
import { reducer } from './Reducer';
import Records from './Records';
import initialState from './initialState';

const Timer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [records, setRecords] = useState([]);
  return (
    <div>
      <h1 className="TimerDiff">{state.timeDiff / 1000} s</h1>
      <div className="Timer">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: 'runTimer' });
          }}
        >
          {state.isPause ? '开始' : '暂停'}
        </button>

        <button className="btn">添加</button>
        <button className="btn" onClick={() => dispatch({ type: 'reset' })}>
          重置
        </button>
      </div>
      <Records />
    </div>
  );
};

export default Timer;
