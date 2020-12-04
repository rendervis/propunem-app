import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
///////UX
import OverlayBackground from "./overlay-background";
///////UI
import { BigButtonOutline } from "../UI/big-button-outline.component";

export const ModalPresentation = (props) => {
  const {
    companyName,
    firstName,
    surname,
    jobTitle,
    webAddress,
    brandingText,
    proposalList,
  } = props;

  console.log("[ModalPresentation ->> props]", props);
  const renderList = () => {
    return proposalList.map((name) => {
      console.log(name.trim());
      return (
        <p style={{ marginTop: "1.2%" }} key={name}>
          {name.trim()}
        </p>
      );
    });
  };
  return (
    <OverlayBackground
      key={props.location.key}
      blur="blur(21px)"
      onClick={() => props.history.goBack()}
    >
      <Container>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CompanyNameStyled>
            {companyName || "Nume Companie"}
          </CompanyNameStyled>
          <ModalTitle>Serviciile noastre</ModalTitle>
          <TextStyled> {brandingText || "Text branding"}</TextStyled>
          <div style={{ marginTop: "19.5%" }}>
            <DecorationLine />
            <ProposalListStyled>
              {proposalList.length > 0 ? renderList() : <p>Lista servicii</p>}
            </ProposalListStyled>
          </div>
        </div>
        <UserColumn>
          <CirclePhotoStyled />
          <NameStyled>
            {firstName && surname ? firstName + " " + surname : `Prenume Nume`}
          </NameStyled>
          <JobTitleStyled> {jobTitle || "Titlu Job"}</JobTitleStyled>
          <BigButtonOutline
            style={{ marginTop: "24px" }}
            inputWidth="54px"
            inputHeight="27px"
            borderRadius="3px"
          >
            <a target="_blank" href={webAddress}>
              web
            </a>
          </BigButtonOutline>
        </UserColumn>
      </Container>
    </OverlayBackground>
  );
};
let windowWidth = window.innerWidth;
let containerWidth = (62 / 100) * windowWidth;
const Container = styled.div`
  width: 55vw;
  height: 55.55vh;
  z-index: 101;
  position: absolute;
  top: 45px;
  bottom: auto;
  left: ${(windowWidth - containerWidth) / 2}px;
  right: auto;

  background-color: white;
  padding: 3% 3.85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 2px;
  border-color: #e2e2e2;
  border-style: solid;
  border-width: 1px;
  /* color: #0277bd; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
`;

const CompanyNameStyled = styled.p`
  font-size: 13px;
`;
const ModalTitle = styled.h1`
  font-size: 55px;
  margin-top: 4.2%;
`;
const TextStyled = styled.p`
  font-size: 27px;
  margin-top: 4.2%;
`;
const DecorationLine = styled.div`
  width: 150px;
  height: 6px;
  background-color: #e2e2e2;
`;
const ProposalListStyled = styled.li`
  margin-top: 5.2%;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const UserColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 340px;
  /* justify-content: center; */
  align-items: center;
  padding: 26px;
`;
const CirclePhotoStyled = styled.div`
  width: 89px;
  height: 89px;
  /* background-color: #0277bd; */
  border-radius: 89px;
  border-color: #707070;
  border-style: solid;
  border-width: 1px;
`;
const NameStyled = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 13px;
`;
const JobTitleStyled = styled.p`
  font-size: 13px;
  margin: 13px 0;
`;

export default withRouter(ModalPresentation);
