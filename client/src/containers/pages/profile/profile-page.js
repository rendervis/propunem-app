import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import styled, { css } from "styled-components";
///components
import Header from "../../header.container";
import ProfileMenu from "../../../components/UI/profile/profile-menu/profile-menu";

import Profile from "./profile";
import OfferSend from "./offer-send";
import Situation from "./situation";

///ui-elements
import {
  ProfileBody,
  col1,
  col2,
  col3,
} from "../../../components/UI/profile/ui-profile";

const ProfilePage = ({ history }) => {
  //   let propsRed = red;
  return (
    <React.Fragment>
      <Header />
      <ProfileBody>
        <BodyColumn2 col2>
          <Switch>
            <Route path="/profil/oferte-trimise" component={OfferSend} />
            <Route path="/profil/profil" component={Profile} />
            <Route path="/profil/situatie" component={Situation} />
          </Switch>
        </BodyColumn2>

        <BodyColumn3 col3>
          <ProfileMenu />
        </BodyColumn3>
      </ProfileBody>
    </React.Fragment>
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

export default withRouter(ProfilePage);
