import { call, put, all, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

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

const effects = {
    *watchIncrementAsync() {
        console.log('watch in async...');
        yield takeEvery('INCREMENT_ASYNC', incrementAsync);
    },
    *watchDecrementAsync() {
        console.log('watch de async...');
        yield takeEvery('DECREMENT_ASYNC', decrementAsync);
    }
}

export function *sagas222() {
    const list = [];
    for(let [k, v] of Object.entries(effects)) {
        list.push(v());
    }
    yield all(list);
}

export function *sagas() {
    yield [
        takeEvery('INCREMENT_ASYNC', incrementAsync),
        takeEvery('DECREMENT_ASYNC', decrementAsync)
    ]
}

