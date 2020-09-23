import React from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";
////ui-elements////
import { TextSmall, TextRegular } from "../../../components/UI/ui-elements";
import {
  TopContainer,
  SecondaryMenu,
  ArrowOptions,
} from "../../../components/UI/profile/ui-profile";

export default () => {
  return (
    <React.Fragment>
      <PageTitle>Profil</PageTitle>
      <TopContainer>
        <div style={{ marginLeft: "1.88rem" }}>
          <TextSmall
            style={{
              paddingTop: "1.38rem",
              paddingBottom: "1.38rem",
              marginLeft: "3.56rem",
            }}
          >
            Click pentru editare
          </TextSmall>
          <BigButtonOutline profilePosition>Adauga Propunere</BigButtonOutline>
        </div>
        <SecondaryMenu>
          <TextRegular black style={{ padding: "0 5rem" }}>
            20 Propuneri
          </TextRegular>
          <ArrowOptions>
            <TextRegular black>Toate</TextRegular>
            <ArrowDropDownIcon />
          </ArrowOptions>
        </SecondaryMenu>
      </TopContainer>
    </React.Fragment>
  );
};
