
// Rootsaga file

import { fork, all } from 'redux-saga/effects';

import timelineSaga from '../bundles/timeline/redux/timelineSaga';


export default function* rootSaga() {
  yield all([
    timelineSaga,
  ].map(fork));
}
