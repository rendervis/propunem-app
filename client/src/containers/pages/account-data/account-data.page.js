import React from "react";

import { Switch, Route } from "react-router-dom";

///components
import Header from "../../header.container";
import AccountMenu from "./account-menu";

import PersonalInformation from "./personal-information";
import SetPassword from "./set-password";
import Email from "./email";

///////UI
import {
  PageLayout,
  BodyColumn2,
  BodyColumn3,
} from "../../../components/UI/page-layout";

export default (props) => {
  //   let propsRed = red;
  return (
    <React.Fragment>
      <Header />
      <PageLayout>
        <BodyColumn2>
          <Switch>
            <Route
              exact
              path="/cont/date-personale"
              component={PersonalInformation}
            />
            <Route exact path="/cont/parola" component={SetPassword} />
            <Route exact path="/cont/email" component={Email} />
          </Switch>
        </BodyColumn2>

        <BodyColumn3>
          <AccountMenu />
        </BodyColumn3>
      </PageLayout>
    </React.Fragment>
  );
};
