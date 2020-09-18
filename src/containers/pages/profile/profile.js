import React from "react";
import styled, { css } from "styled-components";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
///components
import Header from "../../header.container";
import ProfileMenu from "../../../components/UI/profile/profile-menu/profile-menu";
import PageTitle from "../../../components/UI/profile/page-title";

///ui-elements
import {
  ProfileBody,
  col1,
  col2,
  col3,
  TopContainer,
  SecondaryMenu,
  ArrowOptions,
} from "../../../components/UI/profile/ui-profile";
import { TextSmall, TextRegular } from "../../../components/UI/ui-elements";
import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";

export default (props) => {
  //   let propsRed = red;
  return (
    <div>
      <Header />
      <ProfileBody>
        <BodyColumn2 col2>
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
              <BigButtonOutline profilePosition>
                Adauga Propunere
              </BigButtonOutline>
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
        </BodyColumn2>
        <BodyColumn3 col3>
          <ProfileMenu />
        </BodyColumn3>
      </ProfileBody>
    </div>
  );
};

const BodyColumn1 = styled.div`
  ${col1}
`;
const BodyColumn2 = styled.div`
  ${col2}
`;
const BodyColumn3 = styled.div`
  ${col3}
`;
