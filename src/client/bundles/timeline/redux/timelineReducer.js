import ActionTypes from './timelineActionTypes';

const initialState = {
  selectedClusterId: '',
  selectedBlockId: '',
  clusterList: [],
  clusterArr: [],
  clusterDataArr: [],
  selectedMonthData: null,
  filter: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.fetchDetails: {
      return {
        ...state, clusterDataArr: [], selectedMonthData: null,
      };
    }
    case ActionTypes.fetchedDetails: {
      return {
        ...state, clusterDataArr: action.payload,
      };
    }
    case ActionTypes.fetchListDetails: {
      return {
        ...initialState,
      };
    }
    case ActionTypes.fetchedListDetails: {
      return {
        ...state, clusterList: action.payload, clusterArr: action.payload.map(item => item.clusterId),
      };
    }
    case ActionTypes.setState: {
      return { ...state, ...action.payload };
    }
    case ActionTypes.clearState: {
      return initialState;
    }


    default: return state;
  }
};

export default Reducer;
