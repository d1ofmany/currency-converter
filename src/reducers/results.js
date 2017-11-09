import { SET_RESULT } from '../actions/results';

const results = (state = { data: [] }, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        data: [
          ...state.data,
          action.result
        ]
      };
    default:
      return state;
  }
};

export default results;
