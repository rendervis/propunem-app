import React from "react";
import { Switch, Route } from "react-router-dom";

///// PAGES /////
import LoginPage from "./containers/pages/login-page/login-page";
import HomePage from "./containers/pages/home-page/home-page";
import ProposalShow from "./containers/pages/proposal/proposal-show.page";
import ProfilePage from "./containers/pages/profile/profile-page";
import AccountDataPage from "./containers/pages/account-data/account-data.page";
import About from "./containers/pages/about/about";
import Price from "./containers/pages/price/price";
import Contact from "./containers/pages/contact/contact";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/inregistrare/:tab" component={LoginPage} />
        <Route exact path="/despre-noi" component={About} />
        <Route exact path="/pret" component={Price} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/profil/:titlu" component={ProfilePage} />
        <Route exact path="/cont/:titlu" component={AccountDataPage} />
        <Route path="/propunere" component={ProposalShow} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
