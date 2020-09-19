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
import ProfileMenu from "../../../components/UI/profile/profile-menu/profile-menu";

import Profile from "./profile";
import OfferSend from "./offer-send";

///ui-elements
import {
  ProfileBody,
  col1,
  col2,
  col3,
} from "../../../components/UI/profile/ui-profile";

export default (props) => {
  //   let propsRed = red;
  return (
    <div>
      <Header />
      <ProfileBody>
        <BodyColumn2 col2>
          <Switch>
            <Route path="/userId/oferte-trimise" component={OfferSend} />
            <Route path="/userId/profil" component={Profile} />
          </Switch>
        </BodyColumn2>

        <BodyColumn3 col3>
          <ProfileMenu />
        </BodyColumn3>
      </ProfileBody>
    </div>
  );
};

const BodyColumn1 = styled.div`
  ${col1}
`;
const BodyColumn2 = styled.div`
  ${col2}
`;
const BodyColumn3 = styled.div`
  ${col3}
`;
