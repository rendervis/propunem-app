import { OFFERS_SENT } from "./types";

export const fetchOffersSent = ({ accountId }) => (dispatch) => {
  dispatch({ type: OFFERS_SENT.FETCH });

  return fetch("/api/offer-sent", {
    method: "POST",
    body: JSON.stringify({ accountId }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      dispatch({
        type: OFFERS_SENT.FETCH_SUCCESS,
        ...json,
      });
    })
    .catch((error) => {
      dispatch({
        type: OFFERS_SENT.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const deleteOffer = ({ projectTitle, email, offerSentId }) => (
  dispatch
) => {
  dispatch({ type: OFFERS_SENT.FETCH });

  return fetch("/api/offer-sent/delete", {
    method: "DELETE",
    body: JSON.stringify({ projectTitle, email }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      dispatch({
        type: OFFERS_SENT.DELETE,
        message: json.message,
        offerSentId,
      });
    })
    .catch((error) => {
      dispatch({
        type: OFFERS_SENT.FETCH_ERROR,
        message: error.message,
      });
    });
};
