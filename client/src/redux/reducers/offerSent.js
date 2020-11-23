import _ from "lodash";
import fetchStates from "./fetchStates";
import { OFFERS_SENT } from "../actions/types";

const INITIAL_STATE = {
  offersSent: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OFFERS_SENT.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case OFFERS_SENT.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case OFFERS_SENT.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        offersSent: action.offersSent,
      };
    case OFFERS_SENT.DELETE:
      return {
        ...state,
        offersSent: _.omit(state.offersSent, action.offerSentId),
      };
    default:
      return state;
  }
};

//{
//    ..._.mapKeys(action.offersSent, "offerSentId"),
//},
