import * as type from "./about-us.types";

export const showText = (text) => {
  return {
    type: type.SHOW_TEXT,
    payload: text,
  };
};

export const createText = (textCard) => {
  return {
    type: type.CREATE_TEXT,
    payload: textCard,
  };
};

export const updateTouched = (textCard) => {
  return {
    type: type.UPDATE_TOUCHED,
    payload: textCard,
  };
};

export const showDefault = (defaultText) => {
  return {
    type: type.SHOW_DEFAULT,
    payload: defaultText,
  };
};

export const deleteText = (textId) => {
  return {
    type: type.DELETE_TEXT,
    payload: textId,
  };
};
