import axios from 'axios';

export const GET_RATES = 'GET_RATES';

export const getRates = (rates) => {
  return { type: GET_RATES, rates };
};

export const getRatesAsync = () => {
  return dispatch => {
    return axios.get('https://txf-ecb.glitch.me/rates')
      .then(function(response) {
        const rates = convertRates(response.data);
        dispatch(getRates(rates));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

const convertRates = (data) => {
  let base = {};
  
  data.rates.forEach((item) => {
    base[data.base] = base[data.base] || {};
    base[data.base][item.currency] = parseFloat(item.rate);
  });
  
  base[data.base][data.base] = 1;

  let rates = data.rates.reduce((acc, val) => {
    acc[val.currency] = {};

    acc[val.currency][data.base] = (1 / acc[data.base][val.currency]);

    data.rates.forEach((rate) => {
      acc[val.currency][rate.currency] = (1 / acc[data.base][val.currency] * rate.rate);
    });

    return acc;
  }, base);

  return rates;
};