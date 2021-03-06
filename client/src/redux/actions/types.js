const ACCOUNT = {
  FETCH: "ACCOUNT_FETCH",
  FETCH_ERROR: "ACCOUNT_FETCH_ERROR",
  FETCH_SUCCESS: "ACCOUNT_FETCH_SUCCESS",
  FETCH_LOGOUT_SUCCESS: "ACCOUNT_FETCH_LOGOUT_SUCCESS",
  FETCH_AUTHENTICATED_SUCCESS: "ACCOUNT_FETCH_AUTHENTICATED_SUCCESS",
  FETCH_GOOGLE_USER_SUCCESS: "ACCOUNT_FETCH_GOOGLE_USER_SUCCESS",
  GOOGLE_USER_CLEAR: "ACCOUNT_GOOGLE_USER_CLEAR",
};
const HOMEPAGE_ACCOUNTS = {
  FETCH: "HOMEPAGE_ACCOUNTS_FETCH",
  FETCH_ERROR: "HOMEPAGE_ACCOUNTS_FETCH_ERROR",
  FETCH_SUCCESS: "HOMEPAGE_ACCOUNTS_FETCH_SUCCESS",
  OFFER_IDLE: "HOMEPAGE_ACCOUNTS_OFFER_IDLE",
  OFFER_FETCH: "HOMEPAGE_ACCOUNTS_OFFER_FETCH",
  OFFER_FETCH_ERROR: "HOMEPAGE_ACCOUNTS_OFFER_FETCH_ERROR",
  OFFER_FETCH_SUCCESS: "HOMEPAGE_ACCOUNTS_OFFER_FETCH_SUCCESS",
};

const ACCOUNT_INFO = {
  FETCH: "ACCOUNT_INFO_FETCH",
  FETCH_ERROR: "ACCOUNT_INFO_FETCH_ERROR",
  FETCH_SUCCESS: "ACCOUNT_INFO_FETCH_SUCCESS",
};
const USER = {
  FETCH: "USER_FETCH",
  FETCH_ERROR: "USER_FETCH_ERROR",
  FETCH_SUCCESS: "USER_FETCH_SUCCESS",
  SAVE_INFO: "USER_SAVE_INFO",
  UPDATE_INFO: "USER_UPDATE_INFO",
  DATA_TO_FORM: "USER_DATA_TO_FORM",
};

const PROPOSAL = {
  FETCH: "PROPOSAL_FETCH",
  FETCH_ERROR: "PROPOSAL_FETCH_ERROR",
  FETCH_SUCCESS: "PROPOSAL_FETCH_SUCCESS",
  EDIT: "PROPOSAL_EDIT",
  DELETE: "PROPOSAL_DELETE",
};

const ABOUTUS = {
  FETCH: "ABOUTUS_FETCH",
  FETCH_ERROR: "ABOUTUS_FETCH_ERROR",
  FETCH_SUCCESS: "ABOUTUS_FETCH_SUCCESS",
  SAVE_TEXT: "ABOUTUS_SAVE_TEXT",
  UPDATE_TOUCHED: "ABOUTUS_UPDATE_TOUCHED",
  SHOW_DEFAULT: "ABOUTUS_SHOW_DEFAULT",
  DELETE_TEXT: "ABOUTUS_DELETE_TEXT",
  CREATE_TEXT: "ABOUTUS_CREATE_TEXT",
  CLEAR_STATE: "ABOUTUS_CLEAR_STATE",
};
const BRANDING_DECLARATION = {
  FETCH: "BRANDING_DECLARATION_FETCH",
  FETCH_ERROR: "BRANDING_DECLARATION_FETCH_ERROR",
  FETCH_SUCCESS: "BRANDING_DECLARATION_FETCH_SUCCESS",
  SAVE: "BRANDING_DECLARATION_SAVE",
  UPDATE: "BRANDING_DECLARATION_UPDATE",
  UPDATE_TOUCHED: "BRANDING_DECLARATION_UPDATE_TOUCHED",

  SHOW_DEFAULT: "BRANDING_DECLARATION_SHOW_DEFAULT",
  CREATE: "BRANDING_DECLARATION_CREATE",
  CLEAR_STATE: "BRANDING_DECLARATION_CLEAR_STATE",
};
const APPROACH = {
  FETCH: "APPROACH_FETCH",
  FETCH_ERROR: "APPROACH_FETCH_ERROR",
  FETCH_SUCCESS: "APPROACH_FETCH_SUCCESS",
  SAVE_TEXT: "APPROACH_SAVE_TEXT",
  UPDATE_TOUCHED: "APPROACH_UPDATE_TOUCHED",
  SHOW_DEFAULT: "APPROACH_SHOW_DEFAULT",
  CREATE_TEXT: "APPROACH_CREATE_TEXT",
  DELETE_TEXT: "APPROACH_DELETE_TEXT",
  CLEAR_STATE: "APPROACH_CLEAR_STATE",
};
const OFFER = {
  FETCH: "OFFER_FETCH",
  FETCH_ERROR: "OFFER_FETCH_ERROR",
  FETCH_SUCCESS: "OFFER_FETCH_SUCCESS",
  SAVE_CARD: "OFFER_SAVE_CARD",
  UPDATE_CARD: "OFFER_UPDATE_CARD",
  SHOW_DEFAULT: "OFFER_SHOW_DEFAULT",
  CREATE_CARD: "OFFER_CREATE_CARD",
  DELETE_CARD: "OFFER_DELETE_CARD",
  CLEAR_STATE: "OFFER_CLEAR_STATE",
};
const OFFERS_SENT = {
  FETCH: "OFFERS_SENT_FETCH",
  FETCH_ERROR: "OFFERS_SENT_FETCH_ERROR",
  FETCH_SUCCESS: "OFFERS_SENT_FETCH_SUCCESS",
  DELETE: "OFFERS_SENT_DELETE",
  CLEAR_STATE: "OFFERS_SENT_CLEAR_STATE",
  TOGGLE_SIGNED: "OFFERS_SENT_TOGGLE_SIGNED",
};
const OPTION_CARD = {
  FETCH: "OPTION_CARD_FETCH",
  FETCH_ERROR: "OPTION_CARD_FETCH_ERROR",
  FETCH_SUCCESS: "OPTION_CARD_FETCH_SUCCESS",
  SAVE_CARD: "OPTION_CARD_SAVE_CARD",
  SAVE_CARD_TEXT: "OPTION_CARD_SAVE_CARD_TEXT",
  UPDATE_CARD: "OPTION_CARD_UPDATE_CARD",
  SHOW_DEFAULT: "OPTION_CARD_SHOW_DEFAULT",
  CREATE_OPTION_CARD: "OPTION_CARD_CREATE_OPTION_CARD",
  DELETE_TEXT: "OPTION_CARD_DELETE_TEXT",
  CLEAR_STATE: "OPTION_CARD_CLEAR_STATE",
};

export {
  ACCOUNT,
  ACCOUNT_INFO,
  USER,
  PROPOSAL,
  ABOUTUS,
  APPROACH,
  OFFER,
  OPTION_CARD,
  BRANDING_DECLARATION,
  HOMEPAGE_ACCOUNTS,
  OFFERS_SENT,
};
