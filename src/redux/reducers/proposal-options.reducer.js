import _ from "lodash";

import {
  SHOW_TEXT,
  CREATE_TEXT,
  UPDATE_TOUCHED,
  DELETE_TEXT,
  SHOW_DEFAULT,
} from "../actions/about-us.types";

const INITIAL_STATE = {
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
  // console.log("[INITIAL_STATE:]", state);

  switch (action.type) {
    case SHOW_TEXT:
      // console.log("[case SHOW_TEXT:]", state.options);
      let name = action.proposalOptionName;
      // console.log("[case SHOW_TEXT:]", state.aboutUs);
      return {
        ...state,
        options: {
          ...state.options,
          [name]: {
            title: action.payload.title,
            priceTag: action.payload.priceTag,
            content: {
              ..._.mapKeys(action.payload.content, "id"),
            },
          },
        },
      };

    case CREATE_TEXT:
      // console.log("[case CREATE_TEXT:]", state.options);
      let nameOption = action.proposalOptionName;

      return {
        ...state,
        options: {
          ...state.options,

          [nameOption]: {
            ...state.options[nameOption],
            title: action.payload.title,
            priceTag: action.payload.priceTag,
            content: {
              ...state.options[nameOption].content,
              [action.payload.content.id]: action.payload.content,
            },
          },
        },
      };

    case UPDATE_TOUCHED:
      let nameUpdate = action.proposalOptionName;

      return {
        ...state,
        [nameUpdate]: {
          ...state[nameUpdate],
          [action.payload.id]: action.payload,
        },
      };
    case SHOW_DEFAULT:
      let nameDefault = action.proposalOptionName;
      // console.log("[case SHOW_DEFAULT:]", state[nameDefault]);

      return {
        ...state,
        options: {
          ...state.options,
          [nameDefault]: {
            ...state.options[nameDefault],
            title: action.payload.title,
            priceTag: action.payload.priceTag,
            content: {
              ...state.options[nameDefault].content,
              [action.payload.content.id]: action.payload.content,
            },
          },
        },
      };
    case DELETE_TEXT:
      // console.log("[case DELETE_TEXT:]", action);
      let nameDelete = action.proposalOptionName;
      return {
        ...state,
        [nameDelete]: _.omit(state[nameDelete], action.payload),
      };
    default:
      return state;
  }
};
