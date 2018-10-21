

//saga effects
import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects'; // aynı anda çalışması için
import { sayHello } from '../sagas/counterSagas';
import { watchIncrement, watchDecrement } from '../sagas/counterSagas';

export default function* rootSaga() {
    yield all([ // hepsi eş zamanlı çalışır
        sayHello,
        watchDecrement(),
        watchIncrement()
    ]);
}

