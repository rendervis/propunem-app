import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

// import styled from "styled-components";

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
  toggleSigned,
  deleteOffer,
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
    const deleteHandler = ({ projectTitle, email, offerSentId }) => {
      // console.log("STERGE->> projectTitle, email, offerSentId");
      dispatch(deleteOffer({ projectTitle, email, offerSentId }));
    };
    return Object.values(offersSent).map((offer) => {
      // console.log("offer", offer);
      return (
        <React.Fragment key={offer.offerSentId}>
          <OfferSentInfo
            {...offer}
            onDelete={() =>
              deleteHandler({
                projectTitle: offer.projectTitle,
                email: offer.email,
                offerSentId: offer.offerSentId,
                selected: offer.selected,
              })
            }
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
      <div
        style={{
          height: "1px",
          width: "45vw",
          zIndex: "1",
          backgroundColor: "#f2f2f2",
          filter: " drop-shadow(1px 1px 2px #4444dd) blur(1px)",
        }}
      />

      <li
        style={{
          height: "500px",
          zIndex: "-1",
          overflowX: "hidden",

          overflow: "auto",
          marginTop: "4px",
          paddingBottom: "75px",
          marginBottom: "50px",

          // backgroundColor: "red",
        }}
      >
        {renderOffersSent()}
      </li>
    </React.Fragment>
  );
};

export default OffersSent;

// window.scrollBy(0, 100)
