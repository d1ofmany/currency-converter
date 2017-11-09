import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

import { Converter } from '../../src/components/Converter/Converter';

describe('Converter', () => {
    
    let mountWrapper;

    const fullState = {
        result: '3.00 USD',
        amount: '1',
        from: 'EUR',
        to: 'USD'
    };
    
    const calculateState = {
        result: null,
        amount: '1',
        from: 'EUR',
        to: 'USD',
    };
    
    const props = {
        rates: {
            "EUR": {
              "EUR": 1,
              "USD": 3
            },
            "USD": {
              "EUR": 0.3333333333333333,
              "USD": 1
            }
        },
        classes: {
            formControl: "",
            resultBox: ""
        },
        getRates: sinon.stub(),
        setResult: sinon.stub()
    };
    
    beforeEach(() => {
        mountWrapper = mount(<Converter {...props} />);
    });
    
    afterEach(() => {
        mountWrapper.unmount();
    });
    
    it('contains input elements', () => {
        expect(mountWrapper.find('TextField').length).to.equal(1);
        expect(mountWrapper.find('Select').length).to.equal(2);
        expect(mountWrapper.find('Button').length).to.equal(1);
    });
    
    it('displays correct result', () => {
        mountWrapper.setState(fullState);
        expect(mountWrapper.find('Paper').text()).to.equal("3.00 USD");
    });

    it('calculates result on button click', () => {
        mountWrapper.setState(calculateState);
        mountWrapper.find('Button').simulate('click');
        expect(mountWrapper.find('Paper').text()).to.equal("3.00 USD");
    });
    
    it('calls setResult when result calculates', () => {
        mountWrapper.setState(calculateState);
        mountWrapper.find('Button').simulate('click');
        expect(props.setResult.called).to.equal(true);
    });
});