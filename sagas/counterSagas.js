


import { DECREMENT, INCREMENT } from '../action/actionTypes';
import { put, takeEvery } from 'redux-saga/effects'; // takeevery action degıstıgınde izleniir


export function* sayHello() {
    console.log('hello world!');
}
function* increment() {
    console.log("this is a increment saga")
}
function* decrement() {
    console.log("this is a decrement saga")
}
export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}
export function* watchDecrement() {
    console.log("decrement saga")
    yield takeEvery(DECREMENT, decrement)
}