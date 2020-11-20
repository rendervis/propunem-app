import _ from "lodash";
import { HOMEPAGE_ACCOUNTS } from "../actions/types";
import fetchStates from "./fetchStates";

const INITIAL_STATE = {
  homepageAccounts: {},
  queryResult: {},
};

export default (state = INITIAL_STATE, action) => {
  console.log("searchBar reducer-action", action);
  switch (action.type) {
    case HOMEPAGE_ACCOUNTS.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case HOMEPAGE_ACCOUNTS.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case HOMEPAGE_ACCOUNTS.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        homepageAccounts: {
          ...state.homepageAccounts,
          ..._.mapKeys(action.homepageAccounts, "accountId"),
        },
        queryResult: {
          ..._.mapKeys(action.queryResult, "accountId"),
        },
      };
    default:
      return state;
  }
};
