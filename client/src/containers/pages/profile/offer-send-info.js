import React from "react";
import styled from "styled-components";

import { TextRegular, TextSmall } from "../../../components/UI/ui-elements";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const OfferSendInfo = (props) => {
  return (
    <OfferDisplay>
      <OfferName>
        <TextRegular title>Prenume Nume</TextRegular>
        <TextSmall blue style={{ paddingLeft: "0.44rem" }}>
          sterge
        </TextSmall>
      </OfferName>
      <StatusContainer>
        <TextRegular>Prospect</TextRegular>
      </StatusContainer>
      <CheckMark>
        <CheckCircleIcon />
        <CheckCircleIcon />
        <RadioButtonUncheckedIcon />
      </CheckMark>
    </OfferDisplay>
  );
};

const OfferDisplay = styled.div`
  width: 54.19rem;
  height: 3.69rem;

  margin-top: 0;
  margin-left: 0;

  align-items: center;

  border-bottom: solid 1px #707070;

  flex: 1;
  display: flex;
  flex-direction: row;
`;
const OfferName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const StatusContainer = styled.div`
  margin-right: 4rem;
  margin-left: auto;
`;

const CheckMark = styled.div`
  width: 16rem;
  height: 1.44rem;

  margin-right: 4.5rem;

  display: flex;
  justify-content: space-between;
  color: #707070;
`;

export default OfferSendInfo;
