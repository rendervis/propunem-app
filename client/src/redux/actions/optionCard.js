import { OPTION_CARD } from "./types";

export const fetchOptionCard = ({ proposalId, proposalOptionName, option }) => (
  dispatch
) => {
  dispatch({ type: OPTION_CARD.FETCH });
  // console.log("proposalOptionName", proposalOptionName);
  return fetch("/api/option-card", {
    method: "POST",
    body: JSON.stringify({ title: proposalOptionName, proposalId }),
    headers: { "Content-Type": "application/json" },
    // credentials: "include",
  })
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .then((json) => {
      // console.log("json", json);
      if (json.type === "error") {
        dispatch({
          type: OPTION_CARD.FETCH_ERROR,
          message: json.message,
          option,
          optionCard: json.optionCard,
          proposalOptionName,
          priceTagEmpty: "",
        });
      } else {
        dispatch({
          type: OPTION_CARD.FETCH_SUCCESS,
          message: json.message,
          option,
          optionCard: json.optionCard,
          proposalOptionName,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OPTION_CARD.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const saveOptionCard = ({
  proposalId,
  savedOption,
  proposalOptionName,
}) => (dispatch) => {
  const { title, priceTag } = savedOption;
  const { text, textId, key } = savedOption.content;
  console.log("saveOptionCard", savedOption, proposalId);

  dispatch({ type: OPTION_CARD.FETCH });
  return fetch("/api/option-card/save", {
    method: "POST",
    body: JSON.stringify({
      title,
      priceTag,
      text,
      textId,
      key,
      proposalId,
    }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OPTION_CARD.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OPTION_CARD.SAVE_CARD,
          message: json.message,
          savedOption,
          proposalOptionName,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OPTION_CARD.FETCH_ERROR,
        message: error.message,
      });
    });
};
export const saveOptionCardText = ({
  proposalId,
  savedOption,
  proposalOptionName,
}) => (dispatch) => {
  const { title } = savedOption;
  const { text, textId, key } = savedOption.content;
  console.log("saveOptionCardText", savedOption, proposalId);

  dispatch({ type: OPTION_CARD.FETCH });
  return fetch("/api/option-card/save-text", {
    method: "POST",
    body: JSON.stringify({
      title,
      text,
      textId,
      key,
      proposalId,
    }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OPTION_CARD.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OPTION_CARD.SAVE_CARD_TEXT,
          message: json.message,
          savedOption,
          proposalOptionName,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OPTION_CARD.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const updateOptionCard = ({
  proposalId,
  updatedCard,
  proposalOptionName,
}) => (dispatch) => {
  console.log("updateOptionCard", updatedCard);
  const { title, priceTag } = updatedCard;
  const { text, textId } = updatedCard.content;
  dispatch({ type: OPTION_CARD.FETCH });

  return fetch("/api/option-card/update", {
    method: "PATCH",
    body: JSON.stringify({
      title,
      priceTag,
      text,
      textId,
      proposalId,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OPTION_CARD.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OPTION_CARD.UPDATE_CARD,
          message: json.message,
          updatedCard,
          proposalOptionName,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OPTION_CARD.FETCH_ERROR,
        message: error.message,
      });
    });
};

// export const showOption = (option, proposalOptionName) => {
//   return {
//     type: type.SHOW_OPTION,
//     payload: option,
//     proposalOptionName: proposalOptionName,
//   };
// };

export const showDefaultOption = ({ defaultOption, proposalOptionName }) => {
  return {
    type: OPTION_CARD.SHOW_DEFAULT,
    defaultOption,
    proposalOptionName,
  };
};
export const createOptionCard = ({ option, proposalOptionName }) => {
  return {
    type: OPTION_CARD.CREATE_OPTION_CARD,
    option,
    proposalOptionName,
  };
};

// export const updateOption = (option, proposalOptionName) => {
//   return {
//     type: type.UPDATE_OPTION,
//     payload: option,
//     proposalOptionName: proposalOptionName,
//   };
// };

export const deleteOptionCardText = ({
  title,
  textId,
  proposalId,
  proposalOptionName,
}) => (dispatch) => {
  dispatch({
    type: OPTION_CARD.FETCH,
  });
  return fetch("/api/option-card/delete-card-text", {
    method: "DELETE",
    body: JSON.stringify({ title, textId, proposalId }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: OPTION_CARD.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: OPTION_CARD.DELETE_TEXT,
          message: json.message,
          proposalOptionName,
          textId,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: OPTION_CARD.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const optionCardClearState = () => {
  return { type: OPTION_CARD.CLEAR_STATE };
};
