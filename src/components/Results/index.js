import { connect } from 'react-redux';
import ResultsComponent from './Results';

const mapStateToProps = (state, ownProps) => {
    return {
        results: state.results
    };
};

const Results = connect(
  mapStateToProps
)(ResultsComponent);

export default Results;