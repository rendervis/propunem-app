import _ from "lodash";
import { ABOUTUS } from "../actions/types";
import fetchStates from "./fetchStates";

const INITIAL_STATE = {
  aboutUs: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ABOUTUS.FETCH:
      // console.log("[case SHOW_TEXT:]", state.aboutUs);
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case ABOUTUS.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case ABOUTUS.FETCH_SUCCESS:
      console.log("ABOUTUS.FETCH_SUCCESS: action", action);
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        aboutUsText: action.aboutUsText,

        aboutUs: {
          ...state.aboutUs,
          ..._.mapKeys(action.text, "textId"),
        },
      };
    case ABOUTUS.SAVE_TEXT:
      console.log("[case ABOUTUS.SAVE_TEXT: action]", action);
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.payload.textId]: action.payload,
        },
        textId: action.textId,
        aboutText: action.aboutText,
      };
    case ABOUTUS.UPDATE_TOUCHED:
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.payload.textId]: action.payload,
        },
      };
    case ABOUTUS.SHOW_DEFAULT:
      // console.log("[case CREATE_TEXT:]", action);
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.payload.textId]: action.payload,
        },
      };
    case ABOUTUS.DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action);
      return {
        ...state,
        aboutUs: _.omit(state.aboutUs, action.payload),
      };
    case ABOUTUS.CREATE_TEXT:
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.textCard.textId]: action.textCard,
        },
      };
    default:
      return state;
  }
};

// case SHOW_TEXT:
//   // console.log("[case SHOW_TEXT:]", state.aboutUs);
//   return {
//     ...state,
//     aboutUs: {
//       ...state.aboutUs,
//       ..._.mapKeys(action.payload, "textId"),
//     },
//   };
