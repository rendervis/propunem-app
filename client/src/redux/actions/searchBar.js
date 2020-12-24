import { HOMEPAGE_ACCOUNTS } from "./types";

export const fetchHomepageAccounts = () => (dispatch) => {
  dispatch({ type: HOMEPAGE_ACCOUNTS.FETCH });

  return fetch("/api/search/homepage-accounts", {
    // method: "GET",
    // headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // console.log("[/api/search/homepage-accounts]->>response", response);
      return response.json();
    })
    .then((json) => {
      // console.log("[fetchHomepageAccounts]json", json);
      if (json.type === "error") {
        dispatch({
          type: HOMEPAGE_ACCOUNTS.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: HOMEPAGE_ACCOUNTS.FETCH_SUCCESS,
          message: json.message,
          ...json,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: HOMEPAGE_ACCOUNTS.FETCH_ERROR, message: error.message });
    });
};
export const fetchRenderPdfOnHomePage = ({ proposalId }) => (dispatch) => {
  dispatch({ type: HOMEPAGE_ACCOUNTS.OFFER_FETCH });

  return fetch(`/api/homepage-pdf/${proposalId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log("[fetchHomepageAccounts]json", json);
      if (Object.keys(json.offer).length <= 0) {
        dispatch({
          type: HOMEPAGE_ACCOUNTS.OFFER_FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: HOMEPAGE_ACCOUNTS.OFFER_FETCH_SUCCESS,
          message: json.message,
          ...json,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: HOMEPAGE_ACCOUNTS.OFFER_FETCH_ERROR,
        message: error.message,
      });
    });
};

export const fetchSearchResults = ({ query }) => (dispatch) => {
  dispatch({ type: HOMEPAGE_ACCOUNTS.FETCH });
  return fetch("/api/search/accounts", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("[fetchSearchResults]json", json);
      dispatch({ type: HOMEPAGE_ACCOUNTS.FETCH_SUCCESS, ...json });
    })
    .catch((error) => {
      dispatch({ type: HOMEPAGE_ACCOUNTS.FETCH_ERROR, message: error.message });
    });
};
