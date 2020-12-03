import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import offerReducer from "./offer.reducer";
import offerSentReducer from "./offerSent";
import aboutUsReducer from "./about-us.reducer";
import ourApproachReducer from "./our-approach.reducer";
import optionCardReducer from "./optionCard";
import dropdownReducer from "../../components/header-dropdown/redux/dropdown.reducer";
import userAccountReducer from "./userAccount";

import accountReducer from "./account";
import proposalReducer from "./proposal";
import brandingDeclarationReducer from "./brandingDeclaration";
import searchBarReducer from "./searchBar";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "account",
    "userInformation",
    "proposal",
    "aboutUsText",
    "branding",
    "ourApproachText",
    "offerCards",
    "offersSent",
    "optionCard",
  ],
};

export default persistReducer(
  persistConfig,
  combineReducers({
    form: formReducer,
    offerCards: offerReducer,
    offersSent: offerSentReducer,
    aboutUsText: aboutUsReducer,
    ourApproachText: ourApproachReducer,
    optionCard: optionCardReducer,
    headerDropdown: dropdownReducer,

    account: accountReducer,
    userInformation: userAccountReducer,
    proposal: proposalReducer,
    branding: brandingDeclarationReducer,
    searchBar: searchBarReducer,
  })
);
