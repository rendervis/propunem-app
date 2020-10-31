import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled, { css } from "styled-components";
import { Link, NavLink, withRouter } from "react-router-dom";

///// UI elements /////
import { TextSmall, TextRegular } from "../../ui-elements";

///////actions
import { fetchUserAccountInfo } from "../../../../redux/actions/userAccount";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const accountId = useSelector((state) => state.account.accountId);

  return (
    <ProfileMenuStyled>
      <CirclePhotoStyled></CirclePhotoStyled>
      <EditNameStyled>
        <TextRegular black paddingBottom>
          Nume Prenume
        </TextRegular>
        <Link to="/cont/date-personale">
          <TextSmall
            blue
            marginLeft
            onClick={() => dispatch(fetchUserAccountInfo({ accountId }))}
          >
            edit
          </TextSmall>
        </Link>
      </EditNameStyled>
      <TextRegular blue paddingBottom>
        Click pentru editare status
      </TextRegular>

      <MenuContentStyled>
        <ul
          style={{
            marginTop: "1rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledNavLink to="/profil/profil">Propuneri</StyledNavLink>
          <StyledNavLink to="/profil/servicii">Servicii</StyledNavLink>
          <StyledNavLink to="/profil/oferte-trimise">
            Oferte trimise
          </StyledNavLink>
          <StyledNavLink to="/profil/situatie">Situatie</StyledNavLink>
          <StyledNavLink to="/profil/calendar">Calendar</StyledNavLink>
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

const StyledNavLink = styled(NavLink)`
  font-family: Arimo;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  color: #6f6f6f;
  padding-bottom: 12px;

  &.active {
    color: #000000;
  }
  :hover {
    color: #000000;
  }
`;

export default ProfileMenu;
