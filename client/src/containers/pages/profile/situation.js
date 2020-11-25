import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

////COMPONENTS////
import PageTitle from "../../../components/UI/profile/page-title";
///////ui
import {
  TopContainer,
  TextTopBar,
  SecondaryMenu,
} from "../../../components/UI/profile/ui-profile";
///////actions
import { fetchOffersSent } from "../../../redux/actions/offerSent";

const Situation = () => {
  const dispatch = useDispatch();
  let [countedOffersSent, setCountedOffersSent] = useState(0);
  let [countSigned, setCountSigned] = useState(0);
  let [countDownloaded, setCountDownloaded] = useState(0);
  let [countSent, setCountSent] = useState(0);

  const accountId = useSelector((state) => state.account.accountId);
  const offersSent = useSelector((state) => state.offersSent.offersSent);

  useEffect(() => {
    dispatch(fetchOffersSent({ accountId }));
  }, [accountId]);
  useEffect(() => {
    setCountedOffersSent(Object.keys(offersSent).length);
    if (countedOffersSent > 0) updateCountOnOffers();
  }, [countedOffersSent, offersSent]);

  const updateCountOnOffers = () => {
    setCountSigned(
      Object.values(offersSent).filter((offer) => offer.signed === true).length
    );
    setCountDownloaded(
      Object.values(offersSent).filter((offer) => offer.downloaded === true)
        .length
    );
    setCountSent(
      Object.values(offersSent).filter((offer) => offer.downloaded === false)
        .length
    );
  };

  return (
    <React.Fragment>
      <PageTitle>Situatie</PageTitle>
      <TopContainer>
        <SecondaryMenu>
          <CountWrapper>
            <TextTopBar>Toate</TextTopBar>
            <Count>{countedOffersSent}</Count>
          </CountWrapper>
          <CountWrapper>
            <TextTopBar>Contracte Semnate</TextTopBar>
            <Count>{countSigned}</Count>
          </CountWrapper>
          <CountWrapper>
            <TextTopBar>Descarcate</TextTopBar>
            <Count>{countDownloaded}</Count>
          </CountWrapper>
          <CountWrapper>
            <TextTopBar>Trimise</TextTopBar>
            <Count>{countSent}</Count>
          </CountWrapper>
        </SecondaryMenu>
      </TopContainer>
    </React.Fragment>
  );
};
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
