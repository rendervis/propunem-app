import _ from "lodash";
import fetchStates from "./fetchStates";
import { OFFERS_SENT } from "../actions/types";

const INITIAL_STATE = {
  offersSent: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log("action", action);
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
        offersSent: { ..._.mapKeys(action.offersSent, "offerSentId") },
      };
    case OFFERS_SENT.TOGGLE_SIGNED:
      return {
        ...state,
        offersSent: {
          ...state.offersSent,
          [action.offerSentId]: {
            ...state.offersSent[action.offerSentId],
            signed: !state.offersSent[action.offerSentId].signed,
          },
        },
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
