import { APPROACH } from "./types";

export const fetchOurApproachText = ({ proposalId, ourApproach }) => (
  dispatch
) => {
  dispatch({ type: APPROACH.FETCH });
  return fetch("/api/ourapproach", {
    method: "POST",
    body: JSON.stringify({ proposalId }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(" const fetchOurApproachText =json", json);
      const { ourApproachText } = json;
      if (!ourApproach) {
        dispatch({
          type: APPROACH.FETCH_ERROR,
          message: json.message,
          ourApproach,
        });
      } else {
        dispatch({
          type: APPROACH.FETCH_SUCCESS,
          message: json.message,
          ourApproachText,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: APPROACH.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const saveText = ({ textCard, proposalId }) => (dispatch) => {
  const { text_id, approach_text } = textCard;
  dispatch({
    type: APPROACH.FETCH,
  });

  return fetch("/api/ourapproach/save", {
    method: "POST",
    body: JSON.stringify({
      proposalId,
      text_id,
      approach_text,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log("const saveText = json", json.message);
      if (json.type === "error") {
        dispatch({ type: APPROACH.FETCH_ERROR, message: json.message });
      } else {
        dispatch({
          type: APPROACH.SAVE_TEXT,
          message: json.message,
          textCard,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: APPROACH.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const updateTouched = ({ textCard }) => {
  return {
    type: APPROACH.UPDATE_TOUCHED,
    textCard,
  };
};
export const showDefault = ({ defaultText }) => {
  return {
    type: APPROACH.SHOW_DEFAULT,
    defaultText,
  };
};

export const createText = ({ textCard }) => {
  return {
    type: APPROACH.CREATE_TEXT,
    textCard,
  };
};

export const deleteText = (textId) => {
  return {
    type: APPROACH.DELETE_TEXT,
    payload: textId,
  };
};

export const ourApproachClearState = () => {
  return { type: APPROACH.CLEAR_STATE };
};
