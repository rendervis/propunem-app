import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Switch, Route, useParams } from "react-router-dom";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

///// COMPONENTS /////
import Header from "../../header.container";

///// MAIN Content /////
import OfferShow from "./offer-show.container";
import AboutUs from "./about-us.container";
import OurApproach from "./our-approach.container";
import ProposalOptions from "./proposal-options.container";

///// UI elements /////
import ButtonRound from "../../../components/UI/button-round";

import { TitleText } from "../../../components/UI/ui-elements";

class ProposalShow extends Component {
  render() {
    let mathcUrl = this.props.match.url.replace(/\s/g, "");
    const { proposalName } = this.props.proposal;

    return (
      <React.Fragment>
        <Header />
        <ProposalPageLayout>
          <LeftSide>
            <MenuContainer>
              <MenuTitleContainer>
                <TitleText>{proposalName}</TitleText>
              </MenuTitleContainer>
              <StyledUL>
                <ButtonRound>DESPRE NOI</ButtonRound>

                <ButtonRound>SERVICII</ButtonRound>
                <ButtonRound>ABORDARE</ButtonRound>
                <ButtonRound>OFERTA</ButtonRound>
                <ButtonRound>OPTIUNI</ButtonRound>
              </StyledUL>
            </MenuContainer>
          </LeftSide>
          <MainContent>
            <div
              style={{
                marginTop: "175px",
                marginLeft: "80px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Switch>
                <Route path={`${mathcUrl}/despre-noi`} component={AboutUs} />
                <Route path={`${mathcUrl}/abordare`} component={OurApproach} />
                <Route path={`${mathcUrl}/oferta`} component={OfferShow} />
                <Route
                  path={`${mathcUrl}/optiuni`}
                  component={ProposalOptions}
                />
              </Switch>
            </div>
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

const mapStateToProps = (state) => {
  return {
    proposal: state.proposal,
  };
};
export default connect(mapStateToProps)(ProposalShow);
