import initialState from './initialState';

export const reducer = (state, action) => {
  if (action.type === 'runTimer') {
    return { ...state, isPause: !state.isPause };
  }
  if (
    action.type === 'reset' ||
    action.type === 'add' ||
    action.type === 'clear'
  ) {
    return initialState;
  }
  if (action.type === 'tick') {
    return { ...state, timeDiff: state.timeDiff + 1000 };
  }
};
