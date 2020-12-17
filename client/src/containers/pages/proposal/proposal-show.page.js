import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { pdf } from "@react-pdf/renderer";
///// COMPONENTS /////
import Header from "../../header.container";
import RenderPdf from "./my_pdf_document/RenderPdf";
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
//////actions
import { fetchBrandingDeclaration } from "../../../redux/actions/brandingDeclaration";
import { fetchAboutUsText } from "../../../redux/actions/about-us.actions";
import { fetchOurApproachText } from "../../../redux/actions/our-approach.actions";
import { fetchOfferCards } from "../../../redux/actions/offer.actions";
import {
  optionCardClearState,
  fetchOptionCard,
} from "../../../redux/actions/optionCard";
import { deleteProposal } from "../../../redux/actions/proposal";

const ProposalShow = (props) => {
  // console.log("props ", props);
  const dispatch = useDispatch();
  const { proposalId, proposalName } = props.match.params;
  const [previewSelected, setPreviewSelected] = useState("standard");
  /**
   * data from Redux store
   */
  const { userInformation } = useSelector((state) => state.userInformation);
  const aboutUsText = useSelector((state) => state.aboutUsText.aboutUsText);

  const proposalList = useSelector((state) => state.proposal.proposalList);
  const ourApproach = useSelector(
    (state) => state.ourApproachText.ourApproachText
  );
  const offerCards = useSelector((state) => state.offerCards.offerCards);
  const optionCard = useSelector((state) => state.optionCard.optionCard);
  const brandingDeclaration = useSelector(
    (state) => state.branding.brandingDeclarationDB
  );

  const accountId = useSelector((state) => state.account.accountId);
  /** Local state */
  const [loading, setLoading] = useState(false);
  ///////clear State
  useEffect(() => {
    dispatch(optionCardClearState());
  }, []);

  useEffect(() => {
    dispatch(fetchBrandingDeclaration({ accountId }));
    dispatch(fetchAboutUsText({ proposalId }));
    dispatch(fetchOurApproachText({ proposalId }));
    dispatch(fetchOfferCards({ proposalId }));
    dispatch(
      fetchOptionCard({
        proposalOptionName: "standard",
        proposalId,
        option: {},
      })
    );
    dispatch(
      fetchOptionCard({
        proposalOptionName: "recomandat",
        proposalId,
        option: {},
      })
    );
    dispatch(
      fetchOptionCard({
        proposalOptionName: "premium",
        proposalId,
        option: {},
      })
    );
  }, []);

  ///////
  let matchPath = props.match.path.replace(/\s/g, "");
  // const { proposalName } = props.proposal;
  //** send EMAIL */
  const sendEmailHandler = async ({ fields, selected }) => {
    // console.log("selected", selected);
    setLoading(true);
    setPreviewSelected(selected);
    const json = JSON.stringify({ accountId, proposalId, selected, ...fields });

    let pdfBlob = await pdf(
      <MyDocument
        clientName={fields.nume_client}
        projectTitle={fields.titlu_proiect}
        selected={selected}
        ///////
        userInformation={userInformation}
        aboutUsText={aboutUsText}
        brandingDeclaration={brandingDeclaration}
        proposalList={proposalList}
        ourApproach={ourApproach}
        offerCards={offerCards}
        optionCard={optionCard}
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

          setLoading(false);
          alert("Email trimis, super!");
        } else if (json.type === "error") {
          // console.log(json);
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
              <TitleText>{proposalName.replace("-", " ")}</TitleText>
            </MenuTitleContainer>
            <StyledUL>
              <ButtonRound>DESPRE NOI</ButtonRound>
              <ButtonRound>SERVICII</ButtonRound>
              <ButtonRound>ABORDARE</ButtonRound>
              <ButtonRound>OFERTA</ButtonRound>
              <ButtonRound>OPTIUNI</ButtonRound>
              <ButtonRound>PREVIEW</ButtonRound>
              <ButtonRound>TRIMITE</ButtonRound>

              <div
                style={{ marginTop: "24px" }}
                onClick={() =>
                  dispatch(
                    deleteProposal({ proposalId, proposalName }, props.history)
                  )
                }
              >
                <ButtonRound>STERGE</ButtonRound>
              </div>

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
                    loading={loading}
                    showToggleGroup
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
