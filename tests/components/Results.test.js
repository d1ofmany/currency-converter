import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Results from '../../src/components/Results/Results';

describe('Results', () => {
    
    let mountWrapper;
    const results = [
        {
            from: "1.00 EUR",
            to: "7.00 HRK"
        },
        {
            from: "7.00 HRK",
            to: "1.00 EUR"
        },
    ];
    
    it('contains table', () => {
        const props = { results: { data: [] } };
        mountWrapper = mount(<Results {...props} />);
        
        expect(mountWrapper.find('Table').length).to.equal(1);
    });
    
    it('renders empty when there are no results', () => {
        const props = { results: { data: [] } };
        mountWrapper = mount(<Results {...props} />);
        
        expect(mountWrapper.find('TableBody TableRow').length).to.equal(0);
    });
    
    it('renders results when threre are results', () => {
        const props = { results: { data: results } };
        mountWrapper = mount(<Results {...props} />);

        expect(mountWrapper.find('TableBody TableRow').length).to.equal(2);
    });
});