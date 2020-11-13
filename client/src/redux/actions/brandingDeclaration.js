import { BRANDING_DECLARATION } from "./types";

export const fetchBrandingDeclaration = ({
  accountId,
  brandingDeclaration,
}) => (dispatch) => {
  dispatch({
    type: BRANDING_DECLARATION.FETCH,
  });
  return fetch("/api/branding-declaration", {
    method: "POST",
    body: JSON.stringify({ accountId }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const { brandingDeclarationDB } = json;
      if (!brandingDeclarationDB) {
        dispatch({
          type: BRANDING_DECLARATION.FETCH_ERROR,
          type: json.message,
          brandingDeclaration,
        });
      } else {
        dispatch({
          type: BRANDING_DECLARATION.FETCH_SUCCESS,
          message: json.message,
          brandingDeclarationDB,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANDING_DECLARATION.FETCH_ERROR,
        message: error.message,
      });
    });
};
///////
export const brandingDeclarationSave = ({ accountId, textCard }) => (
  dispatch
) => {
  const { text_id, text } = textCard;
  dispatch({ type: BRANDING_DECLARATION.FETCH });
  return fetch("/api/branding-declaration/save", {
    method: "POST",
    body: JSON.stringify({
      accountId,
      text_id,
      text,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: BRANDING_DECLARATION.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: BRANDING_DECLARATION.SAVE,
          message: json.message,
          textCard,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANDING_DECLARATION.FETCH_ERROR,
        message: error.message,
      });
    });
};

///////
export const brandingDeclarationUpdate = ({ accountId, textCard }) => (
  dispatch
) => {
  const { text_id, text } = textCard;
  dispatch({ type: BRANDING_DECLARATION.FETCH });
  return fetch("/api/branding-declaration/update", {
    method: "PUT",
    body: JSON.stringify({
      accountId,
      text_id,
      text,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: BRANDING_DECLARATION.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: BRANDING_DECLARATION.SAVE,
          message: json.message,
          textCard,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANDING_DECLARATION.FETCH_ERROR,
        message: error.message,
      });
    });
};

///////
export const showDefault = ({ defaultText }) => {
  return {
    type: BRANDING_DECLARATION.SHOW_DEFAULT,
    defaultText,
  };
};
///////
export const createText = ({ textCard }) => {
  return {
    type: BRANDING_DECLARATION.CREATE,
    textCard,
  };
};
///////
export const brandingDeclarationClearState = () => {
  return { type: BRANDING_DECLARATION.CLEAR_STATE };
};
