import { call, put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function helloSaga() {
    console.log('hello saga...');
}

export function *incrementAsync() {
    // const { data } = yield call(fetchFun, params)
    console.log('async in 1...');
    yield delay(2000);
    console.log('async in 2...');
    yield put({ type: 'INCREMENT' });
    console.log('async in 3...');
}

export function *decrementAsync() {
    // const { data } = yield call(fetchFun, params)
    console.log('async de 1...');
    yield delay(2000);
    console.log('async de 2...');
    yield put({ type: 'DECREMENT' });
    console.log('async de 3...');
}

// export function *sagas() {
//     console.log('watch async...');
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync);
// }

// effects
export function *watchIcrementAsync() {
    console.log('watch in async...');
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function *watchDecrementAsync() {
    console.log('watch de async...');
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

export function *sagas() {
    console.log('异步操作...');
    yield all([
        helloSaga(),
        watchIcrementAsync(),
        watchDecrementAsync()
    ])
}

function aaa() {
    console.log('aaa');
}
function bbb() {
    console.log('bbb');
}
const obj = {
    a: aaa,
    b: bbb,
};
for(let [k,v] of Object.entries(obj)) {
    v();
}