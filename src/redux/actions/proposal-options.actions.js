import * as type from "./proposal-options.types";

export const showOption = (option, proposalOptionName) => {
  return {
    type: type.SHOW_OPTION,
    payload: option,
    proposalOptionName: proposalOptionName,
  };
};

export const createOption = (option, proposalOptionName) => {
  return {
    type: type.CREATE_OPTION,
    payload: option,
    proposalOptionName: proposalOptionName,
  };
};

export const updateOption = (option, proposalOptionName) => {
  return {
    type: type.UPDATE_OPTION,
    payload: option,
    proposalOptionName: proposalOptionName,
  };
};

export const showDefaultOption = (option, proposalOptionName) => {
  return {
    type: type.SHOW_DEFAULT_OPTION,
    payload: option,
    proposalOptionName: proposalOptionName,
  };
};

export const deleteOption = (id, proposalOptionName) => {
  return {
    type: type.DELETE_OPTION,
    payload: id,
    proposalOptionName: proposalOptionName,
  };
};
