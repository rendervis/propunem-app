import { OFFER } from "./types";

export const fetchOfferCards = ({ proposalId, cards }) => (dispatch) => {
  dispatch({ type: OFFER.FETCH });

  return fetch("/api/offer", {
    method: "POST",
    body: JSON.stringify({ proposalId }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(" const fetchOfferCards =json", json);

      if (json.type === "error") {
        dispatch({
          type: OFFER.FETCH_ERROR,
          message: json.message,
          cards,
        });
      } else {
        dispatch({
          type: OFFER.FETCH_SUCCESS,
          message: json.message,
          offerCards: json.offerCards,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OFFER.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const saveCard = ({ proposalId, savedCard }) => (dispatch) => {
  const { idx, key, textCard, offerPlan } = savedCard;
  console.log(
    "savedCard",
    savedCard,
    typeof textCard.textId,
    "proposalId",
    proposalId
  );
  dispatch({ type: OFFER.FETCH });

  return fetch("/api/offer/save", {
    method: "POST",
    body: JSON.stringify({
      proposalId,
      idx,
      key,
      // textId,
      // title,
      // secondaryTitle,
      // offerText,
      ...textCard,
      offerPlan,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OFFER.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OFFER.SAVE_CARD,
          message: json.message,
          savedCard,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OFFER.FETCH_ERROR,
        message: error.message,
      });
    });
};
export const updateCard = ({ proposalId, updatedCard }) => (dispatch) => {
  const { idx, key, textCard, offerPlan } = updatedCard;
  dispatch({ type: OFFER.FETCH });

  return fetch("/api/offer/update", {
    method: "PUT",
    body: JSON.stringify({
      proposalId,
      ...textCard,
      offerPlan,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OFFER.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OFFER.UPDATE_CARD,
          message: json.message,
          updatedCard,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OFFER.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const showDefault = ({ defaultCard }) => {
  return {
    type: OFFER.SHOW_DEFAULT,
    defaultCard,
  };
};
export const createCard = ({ card }) => {
  return {
    type: OFFER.CREATE_CARD,
    card,
  };
};
export const deleteCard = ({ proposalId, idx }) => (dispatch) => {
  dispatch({
    type: OFFER.FETCH,
  });
  return fetch("/api/offer/delete-card", {
    method: "DELETE",
    body: JSON.stringify({ proposalId, idx }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OFFER.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OFFER.DELETE_CARD,
          message: json.message,
          idx,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OFFER.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const offerClearState = () => {
  return { type: OFFER.CLEAR_STATE };
};

// export const showCards = (cards) => {
//   return {
//     type: type.SHOW_CARDS,
//     payload: cards,
//   };
// };
