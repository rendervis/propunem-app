import { PROPOSAL } from "./types";

export const storeProposal = ({ accountId, proposalName }) => (dispatch) => {
  dispatch({
    type: PROPOSAL.FETCH,
  });
  return fetch("http://localhost:5000/proposal/name", {
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
        dispatch({ type: PROPOSAL.FETCH_ERROR, message: json.message });
      } else {
        dispatch({
          type: PROPOSAL.FETCH_SUCCESS,
          ...json,
          accountId,
          proposalName,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: PROPOSAL.FETCH_ERROR, message: error.message });
    });
};
