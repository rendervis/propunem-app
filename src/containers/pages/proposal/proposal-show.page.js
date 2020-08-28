import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  Switch,
  Route,
  Link,
  withRouter,
  useRouteMatch,
} from "react-router-dom";

///// COMPONENTS /////
import Header from "../../header.container";

///// MAIN Content /////
import OfferShow from "./offer-show.container";

///// UI elements /////
import ButtonRound from "../../../components/UI/button-round";

import { TitleText } from "../../../components/UI/ui-elements";

class ProposalShow extends Component {
  //TODO: change {serviceName} from choose service options when
  // clicking the AddProposalButton

  render() {
    return (
      <React.Fragment>
        <Header />
        <ProposalPageLayout>
          <LeftSide>
            <MenuContainer>
              <MenuTitleContainer>
                <TitleText>Fotografie Nunta</TitleText>
              </MenuTitleContainer>
              <StyledUL>
                <ButtonRound>DESPRE NOI</ButtonRound>
                <ButtonRound>IMAGINI</ButtonRound>
                <ButtonRound>SERVICII</ButtonRound>
                <ButtonRound>ABORDARE</ButtonRound>
                <ButtonRound>OFERTA</ButtonRound>
                <ButtonRound>OPTIUNI</ButtonRound>
              </StyledUL>
            </MenuContainer>
          </LeftSide>
          <MainContent>
            <StyledUL
              style={{
                marginTop: "175px",
                marginLeft: "80px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Switch>
                <Route path="/propunere/despre-noi" />
                <Route path="/propunere/imagini" />
                <Route path="/propunere/oferta" component={OfferShow} />
              </Switch>
            </StyledUL>
          </MainContent>
        </ProposalPageLayout>
      </React.Fragment>
    );
  }
}

const ProposalPageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  background-color: rgba(218, 218, 218, 1);
  /* width: 440px; */
  /* height: 1010px; */
  /* position: absolute; */

  height: 100vh;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContent = styled.div`
  background-color: rgba(255, 255, 255, 1);
  /* width: 1480px; */
  /* height: 1010px; */
  /* margin-left: 440px; */
  /* position: absolute; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 3.36;
  overflow: auto;
`;

const MenuContainer = styled.div`
  /* height: 240px; */
  margin-top: 111px;
  margin-right: auto;
  margin-left: 198px;

  display: flex;
  width: 180px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuTitleContainer = styled.div`
  /* flex: 1 1 0%; */
  flex-direction: row;
  display: flex;
  margin-bottom: 40px;
`;

const StyledUL = styled.ul`
  /* width: 180px; */
  /* height: 138px; */
  /* position: relative; */
`;

export default ProposalShow;
