import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

///////COMPONENTS
import OverlayBackground from "../../../components/UX/overlay-background";
///////ACTIONS
import { storeProposal } from "../../../redux/actions/proposal";

import styled, { css } from "styled-components";

//TODO on login add accountId to store
//TODO get accountId
const ProposalNameInput = ({ history }) => {
  const dispatch = useDispatch();

  const accountId = useSelector((state) => state.account.accountId);
  const [proposalName, setProposalName] = useState("");
  // console.log("const ProposalNameInput = ", accountId, proposalName);

  const handleChange = (event) => {
    const { value } = event.target;
    setProposalName(value);
  };

  const clickHandler = () => {
    dispatch(storeProposal({ accountId, proposalName, history }));
  };

  return (
    <OverlayBackground blur onClick={() => history.push("/profil/profil")}>
      <Container>
        <Title>Vezi cat de repede poti sa scrii o propunere</Title>
        <div style={{ height: "64px" }} />
        <FadedLine>Introduci numele serviciului</FadedLine>
        <div style={{ height: "12px" }} />
        <SecondaryTitle>esti cu un pas mai aproape!</SecondaryTitle>
        <div style={{ height: "40px" }} />
        <InputStyled
          placeholder="Nume Serviciu"
          name="service"
          type="text"
          value={proposalName}
          onChange={handleChange}
          required
        />
        <div style={{ height: "40px" }} />
        <YellowButtonStyled onClick={clickHandler}>CONTINUA</YellowButtonStyled>
        <div style={{ height: "24px" }} />
        <CancelText onClick={() => history.push("/profil/profil")}>
          nu multumesc
        </CancelText>
      </Container>
    </OverlayBackground>
  );
};

const Container = styled.div`
  width: 820px;
  height: 530px;
  border-radius: 12px;
  background-color: #fafafa;
  padding: 66px 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  /* font-family: Helvetica; */
  font-size: 34px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #040404;
`;

const FadedLine = styled.p`
  width: 241px;
  height: 19px;
  /* font-family: Helvetica; */
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.55px;
  text-align: left;
  color: #a0a0a0;

  /* margin-top: 64px; */
  /* margin-bottom: 12px; */
`;

const SecondaryTitle = styled.p`
  /* font-family: Helvetica; */
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: 0.65px;
  text-align: left;
  color: #040404;
`;

const InputStyled = styled.input`
  width: 543px;
  height: 47px;

  background-color: #ffffff;
  border: solid 1px #e2e2e2;
  /* background-color: #fff;
  border: 1px solid #777; */

  padding: 4px 16px;
  border-radius: 3px;

  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: border 0.2s linear, box-shadow 0.2s linear;

  display: inline-block;

  margin-bottom: 9px;
  font-size: 15px;
  line-height: 1.6em;
  color: #333;
`;

const YellowButtonStyled = styled.button`
  width: 219px;
  height: 55px;
  border: solid 1px #d8c37f;
  border-radius: 18px;
  background-color: #ffce0f;

  /* font-family: Arial; */
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #786104;

  /* border: none; */
  box-sizing: 0;
  /* background-color: #ec5252; */
  /* color: white; */

  display: flex;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 120px;
  /* margin: 0 5px; */
  padding: 0 35px 0 35px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  }
`;

const CancelText = styled.div`
  /* font-family: Arial; */
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #0277bd;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #0265a1;
  }
`;

export default withRouter(ProposalNameInput);
