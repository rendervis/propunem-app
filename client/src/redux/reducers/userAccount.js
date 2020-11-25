import fetchStates from "./fetchStates";
import { USER } from "../actions/types";

const INITIAL_STATE = {
  userInformation: {},
  userLocal: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log("[userAccount.reducer -->>]", action);
  switch (action.type) {
    case USER.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case USER.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case USER.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        userInformation: { ...action.userInformation },
      };
    case USER.SAVE_INFO:
      return {
        ...state,
        userInformation: { ...action.userInformation },
      };
    case USER.UPDATE_INFO:
      return {
        ...state,
        userInformation: {
          ...state.userInformation,
          ...action.userInformation,
        },
      };
    case USER.DATA_TO_FORM:
      return {
        ...state,
        userLocal: action.userLocal,
      };

    default:
      return state;
  }
};
