import { USER } from "./types";

export const fetchUserAccountInfo = ({ accountId }) => (dispatch) => {
  dispatch({
    type: USER.FETCH,
  });

  return fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({ accountId }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log("json", json);
      if (json.type === "error") {
        dispatch({ type: USER.FETCH_ERROR, message: json.message });
      } else {
        dispatch({
          type: USER.FETCH_SUCCESS,

          ...json,
        });
      }
    })
    .catch((error) => {
      dispatch({ type: USER.FETCH_ERROR, message: error.message });
    });
};

export const saveUserAccountInfo = ({ userInformation, accountId }) => (
  dispatch
) => {
  const {
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
  } = userInformation;
  console.log("export const saveUserInfo", userInformation);
  dispatch({ type: USER.FETCH });

  return fetch("/api/user/save", {
    method: "POST",
    body: JSON.stringify({
      accountId,
      ...userInformation,
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
          type: USER.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: USER.SAVE_INFO,
          ...json,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: USER.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const updateUserAccount = ({
  firstName,
  surname,
  address,
  city,
  county,
  telephone,
  companyName,
  jobTitle,
  accountId,
}) => (dispatch) => {
  // const { idx, key, textCard, offerPlan } = updatedCard;
  dispatch({ type: USER.FETCH });

  return fetch("/api/offer/update", {
    method: "PUT",
    body: JSON.stringify({
      firstName,
      surname,
      address,
      city,
      county,
      telephone,
      companyName,
      jobTitle,
      accountId,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: USER.FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: USER.UPDATE_INFO,
          ...json,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: USER.FETCH_ERROR,
        message: error.message,
      });
    });
};

export const dataToForm = ({ userLocal }) => ({
  type: USER.DATA_TO_FORM,
  userLocal,
});
