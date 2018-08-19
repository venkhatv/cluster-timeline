import { takeLatest, put, call } from 'redux-saga/effects';
import ActionTypes from './timelineActionTypes';
import reqHelper from '../../../APIRequestHelper';


function* fetchDetailsHandler(action) {
  try {
    const response = yield call(reqHelper.getRequest, { url: '/api/test' });
    yield put({ type: ActionTypes.fetchedDetails, payload: response.data });
  } catch (err) {
    console.log(err);
  }
}


export default function* Saga() {
  yield takeLatest(ActionTypes.fetchDetails, fetchDetailsHandler);
}
