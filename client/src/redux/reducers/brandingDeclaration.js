import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { BRANDING_DECLARATION } from "../actions/types";
import fetchStates from "./fetchStates";

const INITIAL_STATE = {
  brandingDeclaration: {},
  brandingDeclarationDB: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRANDING_DECLARATION.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case BRANDING_DECLARATION.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case BRANDING_DECLARATION.FETCH_SUCCESS:
      let result = action.brandingDeclarationDB.map((object) => ({
        key: uuidv4(),
        touched: false,
        ...object,
      }));
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        brandingDeclarationDB: {
          ..._.mapKeys(result, "text_id"),
        },
        brandingDeclaration: {
          ...state.brandingDeclaration,
          ..._mapKeys(result, "text_id"),
          ..._.mapKeys(action.text, "text_id"),
        },
      };
    case BRANDING_DECLARATION.SAVE:
      return {
        ...state,
        brandingDeclaration: {
          ...state.brandingDeclaration,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case BRANDING_DECLARATION.UPDATE:
      return {
        ...state,
        brandingDeclaration: {
          ...state.brandingDeclaration,
          [action.textCard.text_id]: action.textCard,
        },
      };
    case BRANDING_DECLARATION.SHOW_DEFAULT:
      return {
        ...state,
        brandingDeclaration: {
          ...state.brandingDeclaration,
          [action.defaultText.text_id]: action.defaultText,
        },
      };
    case BRANDING_DECLARATION.CLEAR_STATE:
      return {
        brandingDeclaration: {},
        brandingDeclarationDB: {},
      };
    default:
      return state;
  }
};
