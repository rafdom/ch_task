import {
  FETCH_ORDERS,
  IS_FETCHING,
  HAS_ERRORS,
  FILTER_VENDOR,
} from "../actions/types";
import initialState from "../store/initialState";

export const orderReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case FETCH_ORDERS:
      return {
        ...state,
        filtering: false,
        data: action.payload.orders,
      };
    case HAS_ERRORS:
      return {
        ...state,
        error: action.payload.error,
      };
    case FILTER_VENDOR: {
      return {
        ...state,
        filtering: true,
        data: {
          ...state.data,
          data: state.data.data.filter(
            (el) =>
              // "Off The Bone Meat" has white space - trim() used to fix weird bug when filtering product names
              el.vendorName.trim() === action.payload.vendorName
          ),
        },
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
