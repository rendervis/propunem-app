import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled, { css } from "styled-components";

import { useSelector, useDispatch } from "react-redux";
///////actions
import { toggleHidden } from "../components/header-dropdown/redux/dropdown.actions";
import { logout } from "../redux/actions/account";

import OverlayBackground from "../components/UX/overlay-background";
import HeaderDropdown from "../components/header-dropdown/header-dropdown";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.headerDropdown.hidden);
  const account = useSelector((state) => state.account);

  const onClickHandler = () => {
    dispatch(toggleHidden());
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <FlexHeader>
      <HeaderGrid>
        <BodyColumn2 col2>
          <div style={{ maxWidth: "124px" }}>
            <Link to="/">
              <LogoText>PROPUNEM</LogoText>
            </Link>
          </div>
        </BodyColumn2>
        <BodyColumn3 col3>
          <HeaderMenuContainer>
            <Link to="/despre-noi">
              <HeaderText style={{ paddingLeft: "0" }}>DESPRE NOI</HeaderText>
            </Link>
            <Link to="/pret">
              <HeaderText>PRET</HeaderText>
            </Link>
            <Link to="/contact">
              <HeaderText>CONTACT</HeaderText>
            </Link>
            {!account.isSignedIn ? (
              <Link to="/account/login">
                <RegistrationButton>
                  <RegistrationButtonText>Contul meu</RegistrationButtonText>
                </RegistrationButton>
              </Link>
            ) : (
              <MenuCircle onClick={() => onClickHandler()}>
                <MenuIcon />
              </MenuCircle>
            )}
          </HeaderMenuContainer>
        </BodyColumn3>

        {hidden ? (
          ""
        ) : (
          <OverlayBackground onClick={() => onClickHandler()}>
            <HeaderDropdown user={account.user} />
          </OverlayBackground>
        )}
      </HeaderGrid>
    </FlexHeader>
  );
};
const FlexHeader = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
`;
// grid-template-columns: 222px 1052px 646px;

const HeaderGrid = styled.div`
  /* max-width: 800px; */
  border-bottom: 2px solid rgba(242, 242, 242, 1);
  width: 100%;
  display: grid;
  grid-template-columns: 12fr 56fr 32fr;
  align-items: center;
`;
const BodyColumn1 = styled.div`
  ${(props) =>
    props.col1 &&
    css`
      grid-column-start: 1;
    `}
`;
const BodyColumn2 = styled.div`
  ${(props) =>
    props.col2 &&
    css`
      grid-column-start: 2;
    `}
`;
const BodyColumn3 = styled.div`
  ${(props) =>
    props.col3 &&
    css`
      grid-column-start: 3;
    `}
`;

const LogoText = styled.div`
  /* margin-right: auto; */
  font-size: 1rem;

  font-family: "Lora";
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: 2px;
  text-align: left;
  color: #000000;
  cursor: pointer;
`;
const HeaderMenuContainer = styled.div`
  /* margin: 0 262px 0 auto; */
  /* float: left; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const HeaderText = styled.div`
  padding: 0 1rem;

  font-family: "Arimo";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

const RegistrationButton = styled.div`
  width: auto;
  height: 2.5rem;
  border-radius: 4px;
  border: solid 2px #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10px;
`;

const RegistrationButtonText = styled.span`
  font-family: "Arimo";
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  // line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  align-self: center;
  color: #000000;
`;

const MenuCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border: solid 2px #e2e2e2;
  background-color: #e2e2e2;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 2rem;
  cursor: pointer;
`;

export default Header;
