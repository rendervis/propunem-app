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
  MenuGrid,
  HalfGrid,
  Column1,
  Column2,
  Column3,
  Column4,
  GridRightMargin,
} from "../../../components/UI/profile/ui-profile";
///////actions
import {
  fetchOffersSent,
  deleteOffer,
  toggleSigned,
} from "../../../redux/actions/offerSent";

const OffersSent = (props) => {
  const dispatch = useDispatch();
  const accountId = useSelector((state) => state.account.accountId);
  useEffect(() => {
    dispatch(fetchOffersSent({ accountId }));
  }, []);

  const offersSent = useSelector((state) => state.offersSent.offersSent);
  // console.log("offersSent - offer", offersSent);
  const renderOffersSent = () => {
    if (Object.keys(offersSent).length === 0) {
      return <span>Nu sunt oferte trimise.</span>;
    }
    return Object.values(offersSent).map((offer) => {
      return (
        <React.Fragment key={offer.offerSentId}>
          <OfferSentInfo
            {...offer}
            toggleSigned={() =>
              dispatch(toggleSigned({ offerSentId: offer.offerSentId }))
            }
          />
        </React.Fragment>
      );
    });
  };
  return (
    <React.Fragment>
      <PageTitle>Oferte trimise</PageTitle>
      <TopContainer>
        <SecondaryMenu>
          <MenuGrid>
            <HalfGrid />
            <Column1 />
            <Column2>
              <TextTopBar>Trimis</TextTopBar>
            </Column2>
            <Column3>
              <TextTopBar>Descarcat</TextTopBar>
            </Column3>
            <Column4>
              <TextTopBar>Semnat</TextTopBar>
            </Column4>
            <GridRightMargin />
          </MenuGrid>
        </SecondaryMenu>
      </TopContainer>
      {renderOffersSent()}
    </React.Fragment>
  );
};

export default OffersSent;
