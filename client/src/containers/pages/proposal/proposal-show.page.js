import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Switch, Route, useParams, Link } from "react-router-dom";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

///// COMPONENTS /////
import Header from "../../header.container";

///// MAIN Content /////
import OfferShow from "./offer-show.container";
import AboutUs from "./about-us.container";
import OurApproach from "./our-approach.container";
import ProposalOptions from "./proposal-options.container";
import RenderPdf, { MyDocument } from "./my_pdf_document/RenderPdf";

///////UI
import ButtonRound from "../../../components/UI/button-round";
import { TitleText } from "../../../components/UI/ui-elements";
///////UX
import ProposalForm from "../../../components/UX/ProposalForm";

class ProposalShow extends Component {
  render() {
    let matchPath = this.props.match.path.replace(/\s/g, "");
    const { proposalName } = this.props.proposal;

    this.sendEmailHandler = () => {
      console.log("trimite mail cu propunere");
    };

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
                <ButtonRound>PREVIEW</ButtonRound>
                <ButtonRound>TRIMITE</ButtonRound>
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
              <div>
                <Route
                  exact
                  path={`${matchPath}/despre-noi`}
                  component={AboutUs}
                />
                <Route
                  exact
                  path={`${matchPath}/abordare`}
                  component={OurApproach}
                />
                <Route
                  exact
                  path={`${matchPath}/oferta`}
                  component={OfferShow}
                />
                <Route
                  exact
                  path={`${matchPath}/optiuni`}
                  component={ProposalOptions}
                />
                <Route
                  exact
                  path={`${matchPath}/preview`}
                  component={RenderPdf}
                />
                <Route
                  exact
                  path={`${matchPath}/trimite`}
                  render={(props) => (
                    <ProposalForm
                      {...props}
                      fadedLine="esti cu un pas mai aproape!"
                      placeholder="Nume Client"
                      placeholder2="Titlu Proiect"
                      placeholder3="E-mail"
                      onContinue={this.sendEmailHandler}
                    />
                  )}
                  //  component={ProposalForm}
                />
              </div>
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
