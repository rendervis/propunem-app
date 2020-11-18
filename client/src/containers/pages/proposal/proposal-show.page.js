import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Switch, Route, useParams, Link } from "react-router-dom";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { pdf } from "@react-pdf/renderer";

///// COMPONENTS /////
import Header from "../../header.container";
import RenderPdf, { DownloadPdf } from "./my_pdf_document/RenderPdf";
import MyDocument from "./my_pdf_document/MyDocument";

///// MAIN Content /////
import AboutUs from "./about-us.container";
import ServicesAndCapabilities from "./ServicesAndCapabilities";
import OurApproach from "./our-approach.container";
import OfferShow from "./offer-show.container";
import ProposalOptions from "./proposal-options.container";

///////UI
import ButtonRound from "../../../components/UI/button-round";
import { TitleText } from "../../../components/UI/ui-elements";
///////UX
import ProposalForm from "../../../components/UX/ProposalForm";

const ProposalShow = (props) => {
  /**
   * data from Redux store
   */
  const { userInformation } = useSelector((state) => state.userInformation);
  const aboutUsText = useSelector((state) => state.aboutUsText.aboutUsText);
  const brandingDeclaration = useSelector(
    (state) => state.branding.brandingDeclarationDB[1].text
  );
  const proposalList = useSelector((state) => state.proposal.proposalList);
  const ourApproach = useSelector((state) => state.ourApproachText.ourApproach);
  const offerCards = useSelector((state) => state.offerCards.offerCards);

  ///////
  let matchPath = props.match.path.replace(/\s/g, "");
  const { proposalName } = props.proposal;
  //** send EMAIL */
  const sendEmailHandler = async ({ fields }) => {
    console.log("fields", fields);
    const json = JSON.stringify({ ...fields });

    let pdfBlob = await pdf(
      <MyDocument
        clientName={fields.nume_client}
        projectTitle={fields.titlu_proiect}
        ///////
        userInformation={userInformation}
        aboutUsText={aboutUsText}
        brandingDeclaration={brandingDeclaration}
        proposalList={proposalList}
        ourApproach={ourApproach}
        offerCards={offerCards}
      />
    ).toBlob(); // the blob
    let data = new FormData();
    data.append("json", json);
    data.append("file", pdfBlob);
    ///*FETCH*/
    fetch("/api/send-email", {
      method: "POST",
      // credentials: "include",
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.type === "success") {
          props.history.goBack();
          alert("Email trimis, super!");
        } else if (json.type === "error") {
          console.log(json);
          alert("Oops, nu ai completat tot!");
        }
      });
    // console.log("trimite mail cu propunere");
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

              {/** <DownloadPdf /> */}
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
              <Route
                exact
                path={`${matchPath}/despre-noi`}
                component={AboutUs}
              />
              <Route
                exact
                path={`${matchPath}/servicii`}
                component={ServicesAndCapabilities}
              />
              <Route
                exact
                path={`${matchPath}/abordare`}
                component={OurApproach}
              />
              <Route exact path={`${matchPath}/oferta`} component={OfferShow} />
              <Route
                exact
                path={`${matchPath}/optiuni`}
                component={ProposalOptions}
              />

              <Route
                exact
                path={`${matchPath}/preview`}
                render={(props) => <RenderPdf />}
                //  component={RenderPdf}
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
                    onContinue={sendEmailHandler}
                  />
                )}
                //  component={ProposalForm}
              />
            </Switch>
          </div>
        </MainContent>
      </ProposalPageLayout>
    </React.Fragment>
  );
};

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
