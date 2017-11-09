import { connect } from 'react-redux';
import ConverterComponent from './Converter';

import { getRatesAsync } from '../../actions/rates';
import { setResult } from '../../actions/results';

const mapStateToProps = (state, ownProps) => {
    return {
        rates: state.rates
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getRates: () => dispatch(getRatesAsync()),
        setResult: (result) => dispatch(setResult(result))
    };
};


const Converter = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConverterComponent);

export default Converter;