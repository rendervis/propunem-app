import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import OfferSendInfo from "./offer-send-info";

import {
  TopContainer,
  TextTopBar,
  SecondaryMenu,
} from "../../../components/UI/profile/ui-profile";

const OfferSend = () => (
  <React.Fragment>
    <PageTitle>Oferte trimise</PageTitle>
    <TopContainer>
      <SecondaryMenu>
        <TextTopBar>Standard</TextTopBar>
        <TextTopBar>E-mail</TextTopBar>
        <TextTopBar>Descarcat</TextTopBar>
        <TextTopBar>Semnat</TextTopBar>
      </SecondaryMenu>
    </TopContainer>
    <OfferSendInfo />
    <OfferSendInfo />
    <OfferSendInfo />
  </React.Fragment>
);

export default OfferSend;
