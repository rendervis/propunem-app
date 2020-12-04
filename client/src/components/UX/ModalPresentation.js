import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
///////UX
import OverlayBackground from "./overlay-background";

export const ModalPresentation = (props) => {
  console.log("[ModalPresentation ->> props]", props);
  return (
    <OverlayBackground blur="blur(21px)" onClick={() => props.history.goBack()}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CompanyNameStyled>Nume Companie</CompanyNameStyled>
          <ModalTitle>Serviciile noastre</ModalTitle>
          <p>Text branding</p>
          <li>Lista servicii</li>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Prenume Nume</p>
          <p>titlu job</p>
          <p>adresa web</p>
        </div>
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

  background-color: red;
  padding: 3% 3.85%;
  display: flex;
  flex-direction: row;
`;

const CompanyNameStyled = styled.p`
  font-size: 0.81rem;
`;
const ModalTitle = styled.h1`
  font-size: 3.44rem;
  margin-top: 4.2%;
`;

export default withRouter(ModalPresentation);
