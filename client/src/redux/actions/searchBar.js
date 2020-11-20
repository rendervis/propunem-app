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
          ...json,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: HOMEPAGE_ACCOUNTS.FETCH_ERROR, message: error.message });
    });
};
