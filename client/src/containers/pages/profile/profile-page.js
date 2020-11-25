import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import styled from "styled-components";
///components
import Header from "../../header.container";
import ProfileMenu from "../../../components/UI/profile/profile-menu/profile-menu";
import Services from "./Services";

import Profile from "./profile";
import OffersSent from "./OffersSent";
import Situation from "./situation";

///ui-elements
import {
  ProfileBodyGrid,
  col1,
  col2,
  col3,
} from "../../../components/UI/profile/ui-profile";

const ProfilePage = ({ history }) => {
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
              <Route path="/profil/profil" component={Profile} />
              <Route path="/profil/servicii" component={Services} />
              <Route
                exact
                path="/profil/oferte-trimise"
                component={OffersSent}
              />
              <Route exact path="/profil/situatie" component={Situation} />
            </Switch>
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
