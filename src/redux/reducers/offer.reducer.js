import {
  SHOW_CARDS,
  SHOW_DEFAULT,
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD,
} from "../actions/offer.types";
import _ from "lodash";

// [cardIndex]: _.assign(savedCard),

const initialState = {
  cards: {},
};

export default (state = initialState, action) => {
  console.log("[offer.reducer]", state);
  switch (action.type) {
    case SHOW_CARDS:
      return {
        ...state,
        cards: {
          ...state.cards,

          ..._.mapKeys(action.payload, "idx"),
        },
      };
    case SHOW_DEFAULT:
      return {
        ...state,
        cards: { ...state.cards, [action.idx]: action.payload },
      };
    case CREATE_CARD:
      return {
        ...state,
        cards: { ...state.cards, [action.idx]: action.payload },
      };
    case UPDATE_CARD:
      return {
        ...state,
        cards: { ...state.cards, [action.idx]: action.payload },
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: _.omit(state.cards, action.payload),
      };

    default:
      return state;
  }
};
