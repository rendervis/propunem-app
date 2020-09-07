import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import offerReducer from "./offer.reducer";
import aboutUsReducer from "./about-us.reducer";
import ourApproachReducer from "./our-approach.reducer";

export default combineReducers({
  form: formReducer,
  offer: offerReducer,
  aboutUsText: aboutUsReducer,
  ourApproachText: ourApproachReducer,
});
