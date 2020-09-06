import * as type from "./offer.types";

export const createCard = (savedCard) => {
  return {
    type: type.CREATE_CARD,
    payload: savedCard,
  };
};
export const showDefault = (defaultCard) => {
  return {
    type: type.SHOW_DEFAULT,
    payload: defaultCard,
  };
};

export const showCards = (cards) => {
  return {
    type: type.SHOW_CARDS,
    payload: cards,
  };
};

export const updateCard = (updatedCard) => {
  return {
    type: type.UPDATE_CARD,
    payload: updatedCard,
  };
};

export const deleteCard = (id) => {
  return {
    type: type.DELETE_CARD,
    payload: id,
  };
};
