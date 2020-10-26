import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import fetchStates from "./fetchStates";
import { OFFER } from "../actions/types";

// [cardIndex]: _.assign(savedCard),

const INITIAL_STATE = {
  cards: {},
  offerCards: {},
};

export default (state = INITIAL_STATE, action) => {
  console.log("[offer.reducer]", action.type);
  switch (action.type) {
    case OFFER.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case OFFER.FETCH_ERROR:
      // console.log("[oOFFER.FETCH_ERROR:action]", action);
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case OFFER.FETCH_SUCCESS:
      let result = action.offerCards.map((card) => ({
        key: card.key,
        idx: card.idx,
        textCard: {
          touched: false,
          title: card.title,
          secondaryTitle: card.secondaryTitle,
          text: card.text,
          textId: card.textId,
        },
        offerPlan: { ...card.offerPlan },
      }));
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        offerCards: {
          ..._.mapKeys(result, "idx"),
        },
        cards: {
          ...state.offerCards,
          ..._.mapKeys(result, "idx"),
          ..._.mapKeys(action.cards, "idx"),
        },
      };
    // case SHOW_CARDS:
    //   return {
    //     cards: {
    //       ...state.cards,

    //       ..._.mapKeys(action.payload, "idx"),
    //     },
    //   };
    case OFFER.SAVE_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.savedCard.idx]: action.savedCard,
        },
      };
    case OFFER.UPDATE_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.updatedCard.idx]: action.updatedCard,
        },
      };
    case OFFER.SHOW_DEFAULT:
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.defaultCard.idx]: action.defaultCard,
        },
      };
    case OFFER.DELETE_CARD:
      return {
        ...state,
        cards: _.omit(state.cards, action.idx),
      };
    case OFFER.CREATE_CARD:
      console.log("[CREATE_CARD]", action);
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.card.idx]: action.card,
        },
      };

    case OFFER.CLEAR_STATE:
      return {
        ...state,
        cards: {},
        offerCards: {},
      };

    default:
      return state;
  }
};
