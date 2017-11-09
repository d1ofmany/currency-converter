import { expect } from 'chai';

import { SET_RESULT } from '../../src/actions/results';
import { setResult } from '../../src/actions/results';

describe('result actions', () => {
  
  it('should create an action to set result', () => {
      
    const result = {
        from: "1.00 EUR",
        to: "7.00 HRK"
    };
    
    const expectedAction = {
        type: SET_RESULT,
        result
    };
    
    expect(setResult(result)).to.deep.equal(expectedAction);
    
  });
  
});