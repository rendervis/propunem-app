import React from "react";

import styled, { css } from "styled-components";
import { Link, NavLink, withRouter } from "react-router-dom";

///// UI elements /////
import { TextSmall, TextRegular } from "../../../components/UI/ui-elements";

const AccountMenu = () => {
  return (
    <AccountMenuStyled>
      <MenuContentStyled>
        <ul
          style={{
            marginTop: "1rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledNavLink to="/cont/date-personale">
            Date personale
          </StyledNavLink>
          <StyledNavLink to="/cont/parola">Parola</StyledNavLink>
          <StyledNavLink to="/cont/e-mail">E-mail</StyledNavLink>
          <StyledNavLink to="/cont/notificari">Notificari</StyledNavLink>
          <StyledNavLink to="/cont/export-date">Export date</StyledNavLink>
        </ul>
      </MenuContentStyled>
    </AccountMenuStyled>
  );
};

const AccountMenuStyled = styled.div`
  width: 275px;
  margin-top: 140px;
  /* height: auto; */
  /* border: solid 1px #707070; */
  display: flex;
  flex-direction: column;

  /* position: absolute; */
  /* margin-top: 4.94rem; */
  /* margin-left: 79.66rem; */
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

export default AccountMenu;
