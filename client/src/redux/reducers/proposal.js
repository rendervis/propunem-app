import { PROPOSAL } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_PROPOSAL = { proposalName: null, accountId: null };

export default (state = { ...DEFAULT_PROPOSAL }, action) => {
  switch (action.type) {
    case PROPOSAL.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case PROPOSAL.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case PROPOSAL.FETCH_SUCCESS:
      console.log("PROPOSAL.FETCH_SUCCESS:", action);
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        proposalName: action.proposalName,
        accountId: action.accountId,
      };
    default:
      return state;
  }
};