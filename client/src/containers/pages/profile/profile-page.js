import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import styled, { css } from "styled-components";
///components
import Header from "../../header.container";
import ProfileMenu from "../../../components/UI/profile/profile-menu/profile-menu";
import ProposalList from "./ProposalList";

import Profile from "./profile";
import OfferSend from "./offer-send";
import Situation from "./situation";

///ui-elements
import {
  ProfileBodyGrid,
  col1,
  col2,
  col3,
} from "../../../components/UI/profile/ui-profile";

//////actions
import { fetchAuthenticated } from "../../../redux/actions/account";

const ProfilePage = ({ history }) => {
  const dispatch = useDispatch();

  ///////not working as expected
  // useEffect(() => {
  //   dispatch(fetchAuthenticated({ history }));
  // }, [dispatch]);
  // //   let propsRed = red;
  return (
    <React.Fragment>
      <Header />
      <FlexWrapper>
        <ProfileBodyGrid>
          <BodyColumn2 col2>
            <Switch>
              <Route path="/profil/oferte-trimise" component={OfferSend} />
              <Route path="/profil/profil" component={Profile} />
              <Route path="/profil/situatie" component={Situation} />
            </Switch>
            <ProposalList />
          </BodyColumn2>

          <BodyColumn3 col3>
            <ProfileMenu />
          </BodyColumn3>
        </ProfileBodyGrid>
      </FlexWrapper>
    </React.Fragment>
  );
};

const FlexWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

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
