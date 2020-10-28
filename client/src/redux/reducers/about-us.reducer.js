import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { ABOUTUS } from "../actions/types";
import fetchStates from "./fetchStates";

const INITIAL_STATE = {
  aboutUs: {},
  aboutUsText: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log("[about-us.reducer -->>]", action);
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
      // console.log("ABOUTUS.FETCH_SUCCESS: action", action);
      let result = action.aboutUsText.map((object) => ({
        key: uuidv4(),

        touched: false,
        ...object,
      }));
      // console.log("ABOUTUS.FETCH_SUCCESS: result", result);
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        // aboutUsText: action.aboutUsText,
        aboutUsText: {
          ..._.mapKeys(result, "text_id"),
        },

        aboutUs: {
          ...state.aboutUs,
          ..._.mapKeys(result, "text_id"),
          ..._.mapKeys(action.text, "text_id"),
        },
      };
    case ABOUTUS.SAVE_TEXT:
      // console.log("[case ABOUTUS.SAVE_TEXT: action]", action);
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case ABOUTUS.UPDATE_TOUCHED:
      // console.log("case ABOUTUS.UPDATE_TOUCHED: action", action);
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case ABOUTUS.SHOW_DEFAULT:
      // console.log("[case ABOUTUS.SHOW_DEFAULT:action]", action);
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.defaultText.text_id]: action.defaultText,
        },
      };
    case ABOUTUS.DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action.text_id);
      return {
        ...state,
        aboutUs: _.omit(state.aboutUs, action.text_id),
      };
    case ABOUTUS.CREATE_TEXT:
      // console.log("[ case ABOUTUS.CREATE_TEXT:]", action);
      return {
        ...state,
        aboutUs: {
          ...state.aboutUs,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case ABOUTUS.CLEAR_STATE:
      return {
        aboutUs: {},
        aboutUsText: {},
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
