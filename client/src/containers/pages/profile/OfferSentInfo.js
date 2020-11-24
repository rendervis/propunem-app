import React from "react";
import styled from "styled-components";
///////ui
import {
  MenuGrid,
  HalfGrid,
  Column1,
  Column2,
  Column3,
  Column4,
  GridRightMargin,
} from "../../../components/UI/profile/ui-profile";
import { TextRegular, TextSmall } from "../../../components/UI/ui-elements";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const OfferSentInfo = ({ ...props }) => {
  const {
    clientName,
    email,
    offerSentId,
    projectTitle,
    signed,
    downloaded,
  } = props;
  console.log("props", props);
  return (
    <OfferDisplay>
      <MenuGrid>
        <HalfGrid>
          <ClientName>
            <TextRegular title>{clientName}</TextRegular>
            <TextSmall blue style={{ paddingLeft: "0.44rem" }}>
              sterge
            </TextSmall>
          </ClientName>
          <StatusContainer>
            <TextRegular>{email}</TextRegular>
          </StatusContainer>
        </HalfGrid>
        <Column1>Standard</Column1>
        <Column2>
          {downloaded ? <RadioButtonUncheckedIcon /> : <CheckCircleIcon />}
        </Column2>
        <Column3>
          {!downloaded ? <RadioButtonUncheckedIcon /> : <CheckCircleIcon />}
        </Column3>
        <Column4
          style={{ cursor: "pointer" }}
          onClick={() => props.toggleSigned()}
        >
          {signed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </Column4>

        <GridRightMargin />
      </MenuGrid>
    </OfferDisplay>
  );
};

const OfferDisplay = styled.div`
  width: 45vw;
  height: 3.69rem;

  margin-top: 0;
  margin-left: 0;

  align-items: center;

  border-bottom: solid 1px #707070;

  flex: 1;
  display: flex;
  flex-direction: row;
`;
const ClientName = styled.div`
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

export default OfferSentInfo;
