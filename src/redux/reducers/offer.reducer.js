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
  // console.log("[offer.reducer]", action.type);
  switch (action.type) {
    case SHOW_CARDS:
      return {
        cards: {
          ...state.cards,

          ..._.mapKeys(action.payload, "idx"),
        },
      };
    case SHOW_DEFAULT:
      // console.log("[ SHOW_DEFAULT:]", action);
      // console.log("[ SHOW_DEFAULT:]", state.cards);
      return {
        ...state,
        cards: { ...state.cards, [action.payload.idx]: action.payload },
      };
    case CREATE_CARD:
      // console.log("[CREATE_CARD]", action);
      return {
        ...state,
        cards: { ...state.cards, [action.payload.idx]: action.payload },
      };
    case UPDATE_CARD:
      return {
        ...state,
        cards: { ...state.cards, [action.payload.idx]: action.payload },
      };
    case DELETE_CARD:
      // console.log("[DELETE_CARD:]", action.payload);
      // _.omit(state.cards, action.payload),

      return {
        ...state,
        cards: _.omit(state.cards, action.payload),
      };

    default:
      return state;
  }
};
