import { PROPOSAL } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_PROPOSAL = {
  proposalName: null,
  accountId: null,
  proposalId: null,
};

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
        proposalId: action.proposalId,
        proposalList: action.proposalList,
      };
    case PROPOSAL.EDIT:
      console.log("case PROPOSAL.EDIT:", action);
      return {
        ...state,
        proposalName: action.proposalName,
        proposalId: action.proposalId,
      };

    default:
      return state;
  }
};
