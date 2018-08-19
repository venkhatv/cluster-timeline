import ActionTypes from './timelineActionTypes';

const initialState = {
  clusterData: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.fetchedDetails: {
      return {
        ...state, clusterData: action.payload,
      };
    }
    case ActionTypes.clearState: {
      return initialState;
    }


    default: return state;
  }
};

export default Reducer;
