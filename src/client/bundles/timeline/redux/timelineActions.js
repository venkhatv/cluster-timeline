import actionTypes from './timelineActionTypes';

const actions = {
  fetchDetails: payload => ({
    type: actionTypes.fetchDetails,
    payload,
  }),
  fetchListDetails: () => ({
    type: actionTypes.fetchListDetails,
  }),
  clearState: () => ({
    type: actionTypes.clearState,
  }),
  setState: payload => ({
    type: actionTypes.setState,
    payload,
  }),
};

export default actions;
