import React from "react";
import { Switch, Route } from "react-router-dom";

///// PAGES /////
import Proposal from "./containers/pages/proposal/proposal.page";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" />
        <Route path="/profil" />
        <Route path="/propunere" component={Proposal} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
