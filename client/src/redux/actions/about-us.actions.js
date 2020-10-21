import { ABOUTUS } from "./types";
import * as type from "./about-us.types";

export const fetchAboutUsText = ({ proposalId, aboutUs }) => (dispatch) => {
  dispatch({
    type: ABOUTUS.FETCH,
  });
  return fetch("/api/aboutus", {
    method: "POST",
    body: JSON.stringify({ proposalId }),
    headers: { "Content-Type": "application/json" },
    // credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const { aboutUsText } = json;
      console.log("fetchAboutUsText -->>json", json);
      if (!aboutUsText) {
        dispatch({
          type: ABOUTUS.FETCH_ERROR,
          message: json.message,
          aboutUs,
        });
      } else {
        dispatch({
          type: ABOUTUS.FETCH_SUCCESS,
          aboutUsText,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: ABOUTUS.FETCH_ERROR, message: error.message });
    });
};

export const saveText = ({ textCard, proposalId }) => (dispatch) => {
  console.log("export const saveText-->> textCard", textCard);
  const { textId, aboutText } = textCard;
  dispatch({
    type: ABOUTUS.FETCH,
  });
  return fetch("/api/aboutus/save", {
    method: "POST",
    body: JSON.stringify({
      proposalId,
      textId,
      aboutText,
    }),
    headers: { "Content-Type": "application/json" },
    // credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({ type: ABOUTUS.FETCH_ERROR, message: json.message });
      } else {
        dispatch({
          type: ABOUTUS.SAVE_TEXT,
          message: json.message,
          textId,
          aboutText,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: ABOUTUS.FETCH_ERROR, message: error.message });
    });
};

export const updateTouched = (textCard) => (dispatch) => {
  return {
    type: ABOUTUS.UPDATE_TOUCHED,
    payload: textCard,
  };
};

export const showDefault = (defaultText) => {
  return {
    type: ABOUTUS.SHOW_DEFAULT,
    payload: defaultText,
  };
};

export const deleteText = (textId) => {
  return {
    type: ABOUTUS.DELETE_TEXT,
    payload: textId,
  };
};

export const createText = ({ textCard }) => {
  return {
    type: ABOUTUS.CREATE_TEXT,
    textCard,
  };
};
