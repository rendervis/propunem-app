import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import fetchStates from "./fetchStates";
import { APPROACH } from "../actions/types";

const INITIAL_STATE = {
  ourApproach: {},
  ourApproachText: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPROACH.FETCH:
      // console.log("[case SHOW_TEXT:]", state.ourApproach);
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case APPROACH.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case APPROACH.FETCH_SUCCESS:
      let result = action.ourApproachText.map((object) => ({
        key: uuidv4(),
        touched: false,
        ...object,
      }));
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        ourApproachText: {
          ..._.mapKeys(result, "text_id"),
        },
        ourApproach: {
          ...state.ourApproach,
          ..._.mapKeys(result, "text_id"),
          ..._.mapKeys(action.text, "text_id"),
        },
      };
    case APPROACH.SAVE_TEXT:
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case APPROACH.UPDATE_TOUCHED:
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case APPROACH.SHOW_DEFAULT:
      // console.log("[case CREATE_TEXT:]", action);
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.defaultText.text_id]: action.defaultText,
        },
      };
    case APPROACH.DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action);
      return {
        ...state,
        ourApproach: _.omit(state.ourApproach, action.text_id),
      };
    case APPROACH.CREATE_TEXT:
      // console.log("[case CREATE_TEXT:]", action);
      return {
        ...state,
        ourApproach: {
          ...state.ourApproach,
          [action.textCard.text_id]: action.textCard,
        },
      };

    case APPROACH.CLEAR_STATE:
      return {
        ourApproach: {},
        ourApproachText: {},
      };

    default:
      return state;
  }
};
