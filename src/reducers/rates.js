import { GET_RATES } from '../actions/rates';

const rates = (state = {}, action) => {
  switch (action.type) {
    case GET_RATES:
      return action.rates;
    default:
      return state;
  }
};

export default rates;
