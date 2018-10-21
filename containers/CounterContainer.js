
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';

import { increaseAction } from '../action';
import { decreaseAction } from '../action';

const mapStateToProps = (state) => {
    // alert(`state degisti : ${JSON.stringify(state.counterReducer)}`);
    return {
        times: state.counterReducer ? state.counterReducer : 0
    }
};

const mapDispatchToProps = (dispatch) => { // actionları yollamak için
    return {
        onDecrement: (step) => {
            dispatch(decreaseAction(step))
        },
        onIncrement: (step) => {
            dispatch(increaseAction(step))
        }
    };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;