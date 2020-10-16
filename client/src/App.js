import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//////actions
import { fetchGoogleUser } from "./redux/actions/account";
import { fetchAuthenticated } from "./redux/actions/account";

///// PAGES /////
import LoginPage from "./containers/pages/login-page/login-page";
import HomePage from "./containers/pages/home-page/home-page";
import ProposalShow from "./containers/pages/proposal/proposal-show.page";
import ProfilePage from "./containers/pages/profile/profile-page";
import AccountDataPage from "./containers/pages/account-data/account-data.page";
import About from "./containers/pages/about/about";
import Price from "./containers/pages/price/price";
import Contact from "./containers/pages/contact/contact";

function App({ history }) {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.account.isSignedIn);
  useEffect(() => {
    dispatch(fetchAuthenticated({ history }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGoogleUser({ history }));
  }, [dispatch]);

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/account/:tab" component={LoginPage} />
        <Route exact path="/despre-noi" component={About} />
        <Route exact path="/pret" component={Price} />
        <Route exact path="/contact" component={Contact} />

        <Route path="/profil/:titlu/" component={ProfilePage} />
        <Route exact path="/cont/:titlu" component={AccountDataPage} />
        <Route path="/propunere" component={ProposalShow} />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(App);