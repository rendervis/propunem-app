import _ from "lodash";

import {
  SHOW_TEXT,
  CREATE_TEXT,
  UPDATE_TOUCHED,
  DELETE_TEXT,
  SHOW_DEFAULT,
} from "../actions/about-us.types";

const INITIAL_STATE = {
  standard: {},
  recomandat: {},
  premium: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_TEXT:
      let name = action.proposalOptionName;
      // console.log("[case SHOW_TEXT:]", state.aboutUs);
      // console.log("[case SHOW_TEXT:]", action);
      return {
        ...state,
        [name]: {
          ...state[name],
          ..._.mapKeys(action.payload, "id"),
        },
      };
    case CREATE_TEXT:
      // console.log("[case CREATE_TEXT:]", action);
      let nameCreate = action.proposalOptionName;

      return {
        ...state,
        [nameCreate]: {
          ...state[nameCreate],
          [action.payload.id]: action.payload,
        },
      };
    case UPDATE_TOUCHED:
      let nameUpdate = action.proposalOptionName;

      return {
        ...state,
        [nameUpdate]: {
          ...state[nameUpdate],
          [action.payload.id]: action.payload,
        },
      };
    case SHOW_DEFAULT:
      let nameDefault = action.proposalOptionName;
      console.log("[case SHOW_DEFAULT:]", state[nameDefault]);

      return {
        ...state,
        [nameDefault]: {
          ...state[nameDefault],
          [action.payload.id]: action.payload,
        },
      };
    case DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action);
      let nameDelete = action.proposalOptionName;
      return {
        ...state,
        [nameDelete]: _.omit(state[nameDelete], action.payload),
      };
    default:
      return state;
  }
};
