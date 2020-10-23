import { ABOUTUS } from "./types";

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
      console.log("fetchAboutUsText -->>json.aboutUsText", aboutUsText);
      console.log("fetchAboutUsText -->> {aboutUs}", aboutUs);
      if (!aboutUsText) {
        dispatch({
          type: ABOUTUS.FETCH_ERROR,
          message: json.message,
          aboutUs,
        });
      } else {
        dispatch({
          type: ABOUTUS.FETCH_SUCCESS,
          message: json.message,
          aboutUsText,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: ABOUTUS.FETCH_ERROR, message: error.message });
    });
};

export const saveText = ({ textCard, proposalId }) => (dispatch) => {
  console.log(" const saveText-->> textCard", textCard);
  const { text_id, about_text } = textCard;
  dispatch({
    type: ABOUTUS.FETCH,
  });
  return fetch("/api/aboutus/save", {
    method: "POST",
    body: JSON.stringify({
      proposalId,
      text_id,
      about_text,
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
          textCard,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: ABOUTUS.FETCH_ERROR, message: error.message });
    });
};

export const updateTouched = ({ textCard }) => {
  return {
    type: ABOUTUS.UPDATE_TOUCHED,
    textCard,
  };
};

export const showDefault = ({ defaultText }) => {
  return {
    type: ABOUTUS.SHOW_DEFAULT,
    defaultText,
  };
};
export const createText = ({ textCard }) => {
  return {
    type: ABOUTUS.CREATE_TEXT,
    textCard,
  };
};

export const deleteText = ({ proposalId, text_id }) => (dispatch) => {
  dispatch({
    type: ABOUTUS.FETCH,
  });
  return fetch("/api/aboutus/delete-text", {
    method: "DELETE",
    body: JSON.stringify({ proposalId, text_id }),
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
          type: ABOUTUS.DELETE_TEXT,
          message: json.message,
          text_id,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: ABOUTUS.FETCH_ERROR, message: error.message });
    });
};

export const aboutUsClearState = () => {
  return { type: ABOUTUS.CLEAR_STATE };
};
