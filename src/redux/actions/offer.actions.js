import * as type from "./offer.types";

export const createCard = (savedCard) => {
  return {
    type: type.CREATE_CARD,
    payload: savedCard,
  };
};
export const showDefault = (defaultCard, lastIndex) => {
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

export const updateCard = (id, formValues) => {
  return (dispatch) => {
    // const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({
      type: type.UPDATE_CARD,
      payload: formValues,
    });
  };
};

export const deleteCard = (id) => {
  return {
    type: type.DELETE_CARD,
    payload: id,
  };
};
