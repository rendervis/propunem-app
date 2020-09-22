import React from "react";
import styled, { css } from "styled-components";

import {
  Switch,
  Route,
  Link,
  withRouter,
  useRouteMatch,
} from "react-router-dom";

///components
import Header from "../../header.container";
import AccountMenu from "./account-menu";

import PersonalInformation from "./personal-information";

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
              path="/cont/date-personale"
              component={PersonalInformation}
            />
          </Switch>
        </BodyColumn2>

        <BodyColumn3>
          <AccountMenu />
        </BodyColumn3>
      </PageLayout>
    </React.Fragment>
  );
};
