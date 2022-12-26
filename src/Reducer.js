import initialState from './initialState';

export const reducer = (state, action) => {
  if (action.type === 'runTimer') {
    if (state.isPause) {
      const curTime = new Date().getTime();
      return { ...state, isPause: !state.isPause, start: curTime };
    } else if (!state.isPause) {
      const curTime = new Date().getTime();
      return {
        ...state,
        isPause: !state.isPause,
        timeDiff: state.timeDiff + curTime - state.start,
      };
    }
  }
  if (
    action.type === 'reset' ||
    action.type === 'add' ||
    action.type === 'clear'
  ) {
    return initialState;
  }
};
