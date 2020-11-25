import React from "react";

import styled from "styled-components";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";

import {
  TopContainer,
  TextTopBar,
  SecondaryMenu,
} from "../../../components/UI/profile/ui-profile";

const Situation = () => (
  <React.Fragment>
    <PageTitle>Situatie</PageTitle>
    <TopContainer>
      <SecondaryMenu>
        <CountWrapper>
          <TextTopBar>Toate</TextTopBar>
          <Count>7</Count>
        </CountWrapper>
        <CountWrapper>
          <TextTopBar>Contracte Semnate</TextTopBar>
          <Count>2</Count>
        </CountWrapper>
        <CountWrapper>
          <TextTopBar>Descarcate</TextTopBar>
          <Count>3</Count>
        </CountWrapper>
        <CountWrapper>
          <TextTopBar>Trimise</TextTopBar>
          <Count>4</Count>
        </CountWrapper>
      </SecondaryMenu>
    </TopContainer>
  </React.Fragment>
);

const Count = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-top: 12px;
  vertical-align: baseline;
  line-height: 19px;
  /* position: relative; */
  /* margin-bottom: 0.7rem; */
`;
const CountWrapper = styled.div`
  display: "flex";
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export default Situation;
