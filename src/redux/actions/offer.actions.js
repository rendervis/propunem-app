import * as type from "./offer.types";

export const createCard = (savedCard, cardIndex) => {
  return {
    type: type.CREATE_CARD,
    payload: savedCard,
    idx: cardIndex,
  };
};
export const showDefault = (defaultCard, lastIndex) => {
  return (dispatch) => {
    dispatch({
      type: type.SHOW_DEFAULT,
      payload: defaultCard,
      idx: lastIndex,
    });
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
  return (dispatch) => {
    dispatch({
      type: type.DELETE_CARD,
      payload: id,
    });
  };
};
