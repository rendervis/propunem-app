import React, { useEffect } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
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
    // dispatch(fetchGoogleUser({ history }));
  }, [dispatch, isSignedIn]);

  useEffect(() => {
    dispatch(fetchGoogleUser({ history }));
  }, []);

  const AuthRoute = (props) => {
    if (!isSignedIn) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    const { component, path } = props;
    return <Route path={path} component={component} />;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/account/:tab" component={LoginPage} />
        <Route exact path="/despre-noi" component={About} />
        <Route exact path="/pret" component={Price} />
        <Route exact path="/contact" component={Contact} />

        <AuthRoute path="/profil/:titlu" component={ProfilePage} />
        <AuthRoute path="/cont/:titlu" component={AccountDataPage} />
        <AuthRoute path="/propunere/:nume_propunere" component={ProposalShow} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
