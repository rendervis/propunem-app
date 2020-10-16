import { ACCOUNT } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_ACCOUNT = { isSignedIn: false, user: null };

export default (state = DEFAULT_ACCOUNT, action) => {
  console.log("account-action", action);
  switch (action.type) {
    case ACCOUNT.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case ACCOUNT.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case ACCOUNT.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        isSignedIn: true,
      };
    case ACCOUNT.FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        isSignedIn: false,
      };
    case ACCOUNT.FETCH_AUTHENTICATED_SUCCESS:
      // console.log("case ACCOUNT.FETCH_AUTHENTICATED_SUCCESS:", action);
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        isSignedIn: action.authenticated,
        accountId: action.accountId,
      };
    case ACCOUNT.FETCH_GOOGLE_USER_SUCCESS:
      console.log(
        "  case ACCOUNT.FETCH_GOOGLE_USER_SUCCESS:",
        action.authenticated
      );
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        accountId: action.user.account_id,

        user: { ...action.user },
        isSignedIn: action.authenticated,
      };

    default:
      return state;
  }
};
