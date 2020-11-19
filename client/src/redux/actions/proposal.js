import { PROPOSAL } from "./types";

export const storeProposal = ({ accountId, proposalName, history }) => (
  dispatch
) => {
  dispatch({
    type: PROPOSAL.FETCH,
  });
  return fetch("/api/proposal/name", {
    method: "POST",
    body: JSON.stringify({ accountId, proposalName }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        alert(json.message);
        dispatch({ type: PROPOSAL.FETCH_ERROR, message: json.message });
      } else {
        const { proposalId } = json;
        dispatch({
          type: PROPOSAL.FETCH_SUCCESS,
          ...json,
          accountId,
          proposalName,
        });
        history.push(`/propunere/${proposalName}/${proposalId}`);
      }
    })
    .catch((error) => {
      dispatch({ type: PROPOSAL.FETCH_ERROR, message: error.message });
    });
};

export const fetchProposalList = ({ accountId }) => (dispatch) => {
  dispatch({
    type: PROPOSAL.FETCH,
  });
  return fetch("/api/proposal/list", {
    method: "POST",
    body: JSON.stringify({ accountId }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        alert(json.message);
        dispatch({ type: PROPOSAL.FETCH_ERROR, message: json.message });
      } else {
        dispatch({
          type: PROPOSAL.FETCH_SUCCESS,
          proposalList: json.proposalList,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: PROPOSAL.FETCH_ERROR, message: error.message });
    });
};

export const proposalEdit = ({ proposalName, proposalId }) => {
  return {
    type: PROPOSAL.EDIT,
    proposalName,
    proposalId,
  };
};
