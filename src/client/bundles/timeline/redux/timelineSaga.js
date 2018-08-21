import { takeLatest, put, call } from 'redux-saga/effects';
import ActionTypes from './timelineActionTypes';
import reqHelper from '../../../APIRequestHelper';

// function  processData(responseData){
//   const
// }

function* fetchDetailsHandler(action) {
  try {
    // const response = yield call(reqHelper.getRequest, { url: `/api/cluster/${action.payload.id}/${action.payload.blockId}` });
    const response = yield call(reqHelper.getRequest, { url: '/api/cluster/00054b37-9065-8d92-28f3-246e96351668/B8150H2' });
    yield put({ type: ActionTypes.fetchedDetails, payload: response.data });
  } catch (err) {
    console.log(err);
  }
}


export default function* Saga() {
  yield takeLatest(ActionTypes.fetchDetails, fetchDetailsHandler);
}
