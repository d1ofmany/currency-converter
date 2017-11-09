import { expect } from 'chai';
import sinon from 'sinon';

import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { GET_RATES, getRates, getRatesAsync } from '../../src/actions/rates';

describe('rates actions', () => {
    
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    
    it('creates GET_RATES when fetching rates is done', () => {
        
        const rates = [
            {"currency": "USD", "rate": "3"}
        ];
        
        const data = {
            base: "EUR",
            rates
        };
        
        const stub = sinon.stub(axios, 'get').callsFake(() => {
            return new Promise((resolve, reject) => {
                resolve({ data });
            });
        });

        const expectedActions = [
          { 
              type: GET_RATES, rates: {
                  "EUR": {
                      "EUR": 1,
                      "USD": 3
                  },
                  "USD": {
                      "EUR": 0.3333333333333333,
                      "USD": 1
                  }
              }
          }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(getRatesAsync()).then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
        
    });
  
});