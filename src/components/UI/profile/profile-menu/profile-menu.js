import React from "react";

import styled, { css } from "styled-components";

///// UI elements /////
import { TextSmall, TextRegular } from "../../ui-elements";

const ProfileMenu = () => {
  return (
    <ProfileMenuStyled>
      <CirclePhotoStyled></CirclePhotoStyled>
      <EditNameStyled>
        <TextRegular black paddingBottom>
          Nume Prenume
        </TextRegular>
        <TextSmall blue marginLeft>
          edit
        </TextSmall>
      </EditNameStyled>
      <TextRegular blue paddingBottom>
        Click pentru editare status
      </TextRegular>

      <MenuContentStyled>
        <ul style={{ marginTop: "1rem", height: "100%" }}>
          <TextRegular paddingBottom>Propuneri</TextRegular>
          <TextRegular paddingBottom>Servicii</TextRegular>
          <TextRegular paddingBottom>Oferte trimise</TextRegular>
          <TextRegular paddingBottom>Situatie</TextRegular>
          <TextRegular paddingBottom>Calendar</TextRegular>
        </ul>
      </MenuContentStyled>
    </ProfileMenuStyled>
  );
};

const ProfileMenuStyled = styled.div`
  width: 275px;
  /* height: auto; */
  /* border: solid 1px #707070; */
  display: flex;
  flex-direction: column;

  /* position: absolute; */
  /* margin-top: 4.94rem; */
  /* margin-left: 79.66rem; */
`;

const CirclePhotoStyled = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #0277bd;
  border-radius: 3rem;
`;
const EditNameStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.44rem;
`;
const MenuContentStyled = styled.div`
  /* height: 9.88rem; */
  width: 100%;

  /* margin-top: 140px; */

  border-top: solid 1px #bbbbbb;
  border-bottom: solid 1px #bbbbbb;
`;

export default ProfileMenu;
