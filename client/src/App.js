import React, { useEffect, useState } from "react";
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
  let isSignedIn = useSelector((state) => state.account.isSignedIn);
  let { googleUser } = useSelector((state) => state.account);
  const [account, setAccount] = useState(null);
  const [gUser, setGuser] = useState(null);
  // console.log("googleUser", googleUser);
  useEffect(() => {
    setAccount(isSignedIn);
    setGuser(googleUser);
  }, [gUser, account]);
  useEffect(() => {
    dispatch(fetchGoogleUser({ history }));
  }, [gUser, account]);
  useEffect(() => {
    if (googleUser === undefined) {
      dispatch(fetchAuthenticated({ history }));
    }
  }, [gUser, account]);

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
        <Route exact path="/despre-noi" component={About} />
        <Route exact path="/pret" component={Price} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account/:tab" component={LoginPage} />

        <AuthRoute path="/profil/:titlu" component={ProfilePage} />
        <AuthRoute path="/cont/:titlu" component={AccountDataPage} />
        <AuthRoute
          path="/propunere/:proposalName/:proposalId"
          component={ProposalShow}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
