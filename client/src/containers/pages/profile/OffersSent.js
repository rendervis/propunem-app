import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

////COMPONENTS////
import PageTitle from "../../../components/UI/profile/page-title";
import OfferSentInfo from "./OfferSentInfo";
///////ui
import {
  TopContainer,
  TextTopBar,
  SecondaryMenu,
} from "../../../components/UI/profile/ui-profile";
///////actions
import { fetchOffersSent, deleteOffer } from "../../../redux/actions/offerSent";

const OffersSent = (props) => {
  const dispatch = useDispatch();
  const accountId = useSelector((state) => state.account.accountId);
  useEffect(() => {
    dispatch(fetchOffersSent({ accountId }));
  }, []);

  const offersSent = useSelector((state) => state.offersSent.offersSent);
  const renderOffersSent = () => {
    if (!offersSent) {
      return <span>Nu sunt oferte trimise.</span>;
    }
    return offersSent.map((offer) => {
      // console.log("offersSent - offer", offer);
      return <OfferSentInfo {...offer} />;
    });
  };
  return (
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
      {renderOffersSent()}
      <OfferSentInfo />
      <OfferSentInfo />
      <OfferSentInfo />
    </React.Fragment>
  );
};

export default OffersSent;
