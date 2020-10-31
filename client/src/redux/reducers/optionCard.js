import _ from "lodash";
import fetchStates from "./fetchStates";
import { OPTION_CARD } from "../actions/types";

const INITIAL_STATE = {
  optionCard: {
    standard: {
      title: "standard",
      priceTag: "",
      content: {},
    },
    recomandat: {
      title: "recomandat",
      priceTag: "",
      content: {},
    },
    premium: {
      title: "premium",
      priceTag: "",
      content: {},
    },
  },
  options: {
    standard: {
      title: "standard",
      priceTag: "",
      content: {},
    },
    recomandat: {
      title: "recomandat",
      priceTag: "",
      content: {},
    },
    premium: {
      title: "premium",
      priceTag: "",
      content: {},
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  // console.log("[optionCard -->>reducer:]", action);

  switch (action.type) {
    case OPTION_CARD.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case OPTION_CARD.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
      };
    case OPTION_CARD.FETCH_SUCCESS:
      let db = { ..._.mapKeys(action.optionCard, "textId") };
      let dbPriceTag =
        action.optionCard === undefined ? "" : _.result(db[1], "priceTag");

      let name = action.proposalOptionName;
      // console.log("db", db);
      // console.log("name", name, action.proposalOptionName);
      // console.log("dbPriceTag", dbPriceTag);
      return {
        ...state,
        optionCard: {
          ...action.optionCard,
          [name]: {
            content: {
              ..._.mapKeys(action.optionCard, "textId"),
            },
          },
        },

        options: {
          ...state.options,
          [name]: {
            ...state.options[name],
            title: action.option.title,
            priceTag: dbPriceTag || action.option.priceTag,

            content: {
              ...state.options[name].content,
              ..._.mapKeys(action.optionCard, "textId"),
              ..._.mapKeys(action.option.content, "textId"),
            },
          },
        },
      };
    case OPTION_CARD.SAVE_CARD:
      // console.log("[case CREATE_OPTION:]", action);
      let nameOption = action.proposalOptionName;

      return {
        ...state,
        options: {
          ...state.options,

          [nameOption]: {
            ...state.options[nameOption],
            title: action.savedOption.title,
            priceTag: action.savedOption.priceTag,
            content: {
              ...state.options[nameOption].content,
              [action.savedOption.content.textId]: action.savedOption.content,
            },
          },
        },
      };
    case OPTION_CARD.UPDATE_CARD:
      let nameUpdate = action.proposalOptionName;

      return {
        ...state,
        [nameUpdate]: {
          ...state[nameUpdate],
          [action.updatedCard.textId]: action.updatedCard,
        },
      };
    case OPTION_CARD.SHOW_DEFAULT:
      let nameDefault = action.proposalOptionName;
      // console.log("[case SHOW_DEFAULT:]", state[nameDefault]);

      return {
        ...state,
        options: {
          ...state.options,
          [nameDefault]: {
            ...state.options[nameDefault],
            title: action.defaultOption.title,
            priceTag: action.defaultOption.priceTag,
            content: {
              ...state.options[nameDefault].content,
              [action.defaultOption.content.textId]:
                action.defaultOption.content,
            },
          },
        },
      };

    case OPTION_CARD.DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action);
      let nameDelete = action.proposalOptionName;
      return {
        ...state,
        options: {
          ...state.options,

          [nameDelete]: {
            ...state.options[nameDelete],

            content: _.omit(state.options[nameDelete].content, action.textId),
          },
        },
      };
    case OPTION_CARD.CREATE_OPTION_CARD:
      let nameCreate = action.proposalOptionName;
      return {
        ...state,
        options: {
          ...state.options,

          [nameCreate]: {
            ...state.options[nameCreate],
            title: action.option.title,
            priceTag: action.option.priceTag,
            content: {
              ...state.options[nameCreate].content,
              [action.option.content.textId]: action.option.content,
            },
          },
        },
      };

    case OPTION_CARD.CLEAR_STATE:
      return {
        optionCard: {
          standard: {
            title: "standard",
            priceTag: "",
            content: {},
          },
          recomandat: {
            title: "recomandat",
            priceTag: "",
            content: {},
          },
          premium: {
            title: "premium",
            priceTag: "",
            content: {},
          },
        },
        options: {
          standard: {
            title: "standard",
            priceTag: "",
            content: {},
          },
          recomandat: {
            title: "recomandat",
            priceTag: "",
            content: {},
          },
          premium: {
            title: "premium",
            priceTag: "",
            content: {},
          },
        },
      };

    default:
      return state;
  }
};
