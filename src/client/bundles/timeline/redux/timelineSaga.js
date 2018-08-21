import { takeLatest, put, call } from 'redux-saga/effects';
import ActionTypes from './timelineActionTypes';
import reqHelper from '../../../APIRequestHelper';
import clusterData from '../clusterData';
// function  processData(responseData){
//   const
// }

const clusterList = [{
  clusterId: '00054b37-9065-8d92-28f3-246e96351668',
  blockIds: ['FTG8SG2', '2HD20H2', 'FTD3SG2'],
}, {
  clusterId: 'Dummy00054b37-9065-8d92-28f3-246e96351668',
  blockIds: ['DumFTG8SG2', 'dum2HD20H2', 'FTD3SG2', 'CDEF'],
}, {
  clusterId: 'Dummy10054b37-9065-8d92-28f3-246e96351668',
  blockIds: ['DumFTG8SG2', 'dum2HD20H2', 'FTD3SG2', 'CDEF'],
}, {
  clusterId: 'Dummy20054b37-9065-8d92-28f3-246e96351668',
  blockIds: ['DumFTG8SG2', 'dum2HD20H2', 'FTD3SG2', 'CDEF'],
}, {
  clusterId: 'Dummy30054b37-9065-8d92-28f3-246e96351668',
  blockIds: ['DumFTG8SG2', 'dum2HD20H2', 'FTD3SG2', 'CDEF'],
}, {
  clusterId: 'Dummy40054b37-9065-8d92-28f3-246e96351668',
  blockIds: ['DumFTG8SG2', 'dum2HD20H2', 'FTD3SG2', 'CDEF'],
}];
function* fetchDetailsHandler(action) {
  try {
    const response = yield call(reqHelper.getRequestWithCatch, { url: `/api/cluster/${action.payload.id}/${action.payload.blockId}` });
    // const response = yield call(reqHelper.getRequest, { url: '/api/cluster/00054b37-9065-8d92-28f3-246e96351668/B8150H2' });
    yield put({ type: ActionTypes.fetchedDetails, payload: response.data });
    // yield put({ type: ActionTypes.fetchedDetails, payload: clusterData });
  } catch (err) {
    console.log(err);
  }
}

function* fetchListHandler(action) {
  try {
    const response = yield call(reqHelper.getRequestWithCatch, { url: '/api/clusterList' });
    // yield put({ type: ActionTypes.fetchedListDetails, payload: clusterList });
    console.log('adsda');
    yield put({ type: ActionTypes.fetchedListDetails, payload: response.data });
  } catch (err) {
    console.log(err);
  }
}


export default function* Saga() {
  yield takeLatest(ActionTypes.fetchDetails, fetchDetailsHandler);
  yield takeLatest(ActionTypes.fetchListDetails, fetchListHandler);
}
