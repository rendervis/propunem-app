import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import offerReducer from "./offer.reducer";
import aboutUsReducer from "./about-us.reducer";

export default combineReducers({
  form: formReducer,
  offer: offerReducer,
  aboutUsText: aboutUsReducer,
});
