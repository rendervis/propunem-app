import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
///////UX
import OverlayBackground from "./overlay-background";
import ModalOption from "./ModalOption";

const ModalPresentationOptions = (props) => {
  const optionCard = useSelector((state) => state.optionCard.optionCard);
  const renderProposalOptions = () => {
    //TODO get options from state
    //TODO present priceTag
    //TODO map text.
    return (
      <div style={{ display: "flex" }}>
        <ModalOption proposalOptionName={"standard"} {...optionCard.standard} />
        <ModalOption
          proposalOptionName={"recomandat"}
          {...optionCard.recomandat}
        />
        <ModalOption proposalOptionName={"premium"} {...optionCard.premium} />
      </div>
    );
  };

  return (
    <OverlayBackground
      key={props.location.key}
      blur="blur(21px)"
      onClick={() => props.history.goBack()}
    >
      <Container>{renderProposalOptions()}</Container>
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

export default withRouter(ModalPresentationOptions);
