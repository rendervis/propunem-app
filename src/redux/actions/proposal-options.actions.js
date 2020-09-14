import * as type from "./about-us.types";

export const showText = (option, title) => {
  return {
    type: type.SHOW_TEXT,
    payload: option,
    proposalOptionName: title,
  };
};

export const createText = (option, title) => {
  return {
    type: type.CREATE_TEXT,
    payload: option,
    proposalOptionName: title,
  };
};

export const updateTouched = (textCard, proposalOptionName) => {
  return {
    type: type.UPDATE_TOUCHED,
    payload: textCard,
    proposalOptionName: proposalOptionName,
  };
};

export const showDefault = (defaultLine, proposalOptionName) => {
  return {
    type: type.SHOW_DEFAULT,
    payload: defaultLine,
    proposalOptionName: proposalOptionName,
  };
};

export const deleteText = (id, proposalOptionName) => {
  return {
    type: type.DELETE_TEXT,
    payload: id,
    proposalOptionName: proposalOptionName,
  };
};
