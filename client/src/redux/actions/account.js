import { ACCOUNT } from "./types";
import { BACKEND } from "../../configuration";

export const fetchFromAccount = ({
  history,
  pushOnError,
  pushOnSuccess,
  endpoint,
  options,
  FETCH_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
}) => (dispatch) => {
  dispatch({
    type: FETCH_TYPE,
  });
  return fetch(`/api/${endpoint}`, options)
    .then((response) => response.json())
    .then((json) => {
      // console.log(" const fetchFromAccount =json", json);
      if (json.type === "error") {
        dispatch({
          type: ERROR_TYPE,
          message: json.message,
        });
        alert(json.message);
        history.push(`${pushOnError}`);
      } else {
        dispatch({
          type: SUCCESS_TYPE,

          ...json,
        });
        history.push(`${pushOnSuccess}`);
      }
    })

    .catch((error) => {
      dispatch({ type: ERROR_TYPE, message: error.message });
    });
};

export const signup = ({ email, password, history }) =>
  fetchFromAccount({
    history,
    pushOnError: "/account/signup",
    pushOnSuccess: "/profil/profil",
    endpoint: "account/signup",
    options: {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      ///////store Session cookie on the browser
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SUCCESS,
  });

//TODO  not working with fetchFromAccount(). why??
export const logout = () => (dispatch) => {
  dispatch({
    type: ACCOUNT.FETCH,
  });
  return fetch("/api/account/logout", {
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.type === "error") {
        dispatch({ type: ACCOUNT.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: ACCOUNT.FETCH_LOGOUT_SUCCESS, ...json });
      }
    })
    .catch((error) => {
      dispatch({ type: ACCOUNT.FETCH_ERROR, message: error.message });
    });
};

export const login = ({ email, password }) =>
  fetchFromAccount({
    endpoint: "account/login",
    options: {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      ///////store Session cookie on the browser
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SUCCESS,
  });

export const fetchAuthenticated = ({ history }) =>
  fetchFromAccount({
    history,
    pushOnError: "/",
    pushOnSuccess: "/profil/profil",
    endpoint: "account/authenticated",
    options: {
      ///////store Session cookie on the browser
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_AUTHENTICATED_SUCCESS,
  });

export const fetchGoogleUser = ({ history }) => (dispatch) => {
  dispatch({
    type: ACCOUNT.FETCH,
  });
  return fetch("/auth/current_user", {
    method: "GET",

    credentials: "include",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("json:", { ...json });
      if (json.type === "error" || json.authenticated === false) {
        dispatch({ type: ACCOUNT.FETCH_ERROR, message: json.message });
        history.push("/");
      } else {
        dispatch({ type: ACCOUNT.FETCH_GOOGLE_USER_SUCCESS, ...json });
        history.push("/profil/profil");
      }
    })
    .catch((error) => {
      dispatch({ type: ACCOUNT.FETCH_ERROR, message: error.message });
    });
};
