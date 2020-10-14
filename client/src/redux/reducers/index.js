import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import offerReducer from "./offer.reducer";
import aboutUsReducer from "./about-us.reducer";
import ourApproachReducer from "./our-approach.reducer";
import proposalOptionsReducer from "./proposal-options.reducer";
import dropdownReducer from "../../components/header-dropdown/redux/dropdown.reducer";

import accountReducer from "./account";

export default combineReducers({
  form: formReducer,
  offer: offerReducer,
  aboutUsText: aboutUsReducer,
  ourApproachText: ourApproachReducer,
  proposalOptions: proposalOptionsReducer,
  headerDropdown: dropdownReducer,

  account: accountReducer,
});
