import React from "react";
import { Switch, Route } from "react-router-dom";

///// PAGES /////
import HomePage from "./containers/pages/home-page/home-page";
import ProposalShow from "./containers/pages/proposal/proposal-show.page";
import ProfilePage from "./containers/pages/profile/profile-page";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/userId/:titlu" component={ProfilePage} />
        <Route path="/propunere" component={ProposalShow} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
