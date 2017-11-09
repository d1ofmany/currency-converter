import { expect } from 'chai';
import resultsReducer from '../../src/reducers/results';
import { SET_RESULT } from '../../src/actions/results';

describe ('resultsReducer reducer', () => {
    
    it('should handle SET_RESULT', () => {
        const result = {
            from: "1.00 EUR",
            to: "7.00 HRK"
        };
        
        const stateResults = {
            data: [result]
        };
        
        expect(resultsReducer(undefined, { type: SET_RESULT, result })).to.deep.equal(stateResults);
    });
    
});