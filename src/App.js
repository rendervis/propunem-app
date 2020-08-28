import React from "react";
import { Switch, Route } from "react-router-dom";

///// PAGES /////
import ProposalShow from "./containers/pages/proposal/proposal-show.page";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" />
        <Route path="/profil" />
        <Route path="/propunere" component={ProposalShow} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
