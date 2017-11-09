import { expect } from 'chai';
import ratesReducer from '../../src/reducers/rates';
import { GET_RATES } from '../../src/actions/rates';

describe ('ratesReducer reducer', () => {
    
    it('should handle GET_RATES', () => {
        const rates = {
            "EUR": {
                "EUR": 1,
                "USD": 2
            },
            "USD": {
                "EUR": 0.5,
                "USD": 1
            }
        };
        
        expect(ratesReducer(undefined, { type: GET_RATES, rates })).to.equal(rates);
    });
    
});