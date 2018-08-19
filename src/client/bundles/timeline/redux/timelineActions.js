import actionTypes from './timelineActionTypes';

const actions = {
  fetchDetails: payload => ({
    type: actionTypes.fetchDetails,
    payload,
  }),
  clearState: () => ({
    type: actionTypes.clearState,
  }),
};

export default actions;
