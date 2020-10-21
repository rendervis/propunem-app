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
        return;
      } else {
        dispatch({
          type: PROPOSAL.FETCH_SUCCESS,
          ...json,
          accountId,
          proposalName,
        });
        history.push("/propunere");
      }
    })
    .catch((error) => {
      dispatch({ type: PROPOSAL.FETCH_ERROR, message: error.message });
    });
};
