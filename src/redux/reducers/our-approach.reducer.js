import _ from "lodash";

import {
  SHOW_TEXT,
  CREATE_TEXT,
  UPDATE_TOUCHED,
  DELETE_TEXT,
  SHOW_DEFAULT,
} from "../actions/about-us.types";

const INITIAL_STATE = {
  ourApproach: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_TEXT:
      // console.log("[case SHOW_TEXT:]", state.ourApproach);
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          ..._.mapKeys(action.payload, "textId"),
        },
      };
    case CREATE_TEXT:
      // console.log("[case CREATE_TEXT:]", action);
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.payload.textId]: action.payload,
        },
      };
    case UPDATE_TOUCHED:
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.payload.textId]: action.payload,
        },
      };
    case SHOW_DEFAULT:
      // console.log("[case CREATE_TEXT:]", action);
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.payload.textId]: action.payload,
        },
      };
    case DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action);
      return {
        ...state,
        ourApproach: _.omit(state.ourApproach, action.payload),
      };
    default:
      return state;
  }
};
