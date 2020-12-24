import _ from "lodash";
import { HOMEPAGE_ACCOUNTS } from "../actions/types";
import fetchStates from "./fetchStates";

const INITIAL_STATE = {
  homepageAccounts: { offer: { status: fetchStates.idle } },
  queryResult: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log("searchBar reducer-action", action);
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
    case HOMEPAGE_ACCOUNTS.OFFER_IDLE:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        homepageAccounts: {
          ...state.homepageAccounts,
          ..._.mapKeys(action.homepageAccounts, "accountId"),
          offer: {
            ...state.homepageAccounts.offer,
            status: fetchStates.idle,
          },
        },
        queryResult: {
          ..._.mapKeys(action.queryResult, "accountId"),
        },
      };
    case HOMEPAGE_ACCOUNTS.OFFER_FETCH:
      return {
        ...state,
        homepageAccounts: {
          ...state.homepageAccounts,
          offer: { status: fetchStates.fetching },
        },
      };
    case HOMEPAGE_ACCOUNTS.OFFER_FETCH_ERROR:
      return {
        ...state,
        homepageAccounts: {
          ...state.homepageAccounts,
          offer: { status: fetchStates.error, message: action.message },
        },
      };
    case HOMEPAGE_ACCOUNTS.OFFER_FETCH_SUCCESS:
      const parseAbout = action.offer.aboutUsText.map((string) => {
        return JSON.parse(string);
      });
      const parseApproach = action.offer.ourApproachText.map((string) => {
        return JSON.parse(string);
      });
      return {
        ...state,
        homepageAccounts: {
          ...state.homepageAccounts,
          offer: {
            status: fetchStates.success,
            message: action.message,
            aboutUsText: {
              ..._.mapKeys(parseAbout, "text_id"),
            },
            ourApproachText: {
              ..._.mapKeys(parseApproach, "text_id"),
            },
            offerCards: { ..._.mapKeys(action.offer.offerCards, "idx") },
          },
        },
      };
    default:
      return state;
  }
};
