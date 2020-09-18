import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled, { css } from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { toggleHidden } from "../components/header-dropdown/redux/dropdown.actions";

import OverlayBackground from "../components/UX/overlay-background";
import HeaderDropdown from "../components/header-dropdown/header-dropdown";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.headerDropdown.hidden);
  console.log(hidden);

  const onClickHandler = () => {
    dispatch(toggleHidden());
  };

  return (
    <HeaderContainer>
      <BodyColumn2 col2>
        <Link to="/">
          <LogoText>PROPUNEM</LogoText>
        </Link>
      </BodyColumn2>
      <BodyColumn3 col3>
        <HeaderMenuContainer c>
          <HeaderText style={{ paddingLeft: "0" }}>DESPRE NOI</HeaderText>
          <HeaderText>PRET</HeaderText>
          <HeaderText>CONTACT</HeaderText>
          <Link to="/inregistrare">
            <RegistrationButton>
              <RegistrationButtonText>INREGISTRARE</RegistrationButtonText>
            </RegistrationButton>
          </Link>
          <MenuCircle onClick={() => onClickHandler()}>
            <MenuIcon />
          </MenuCircle>
        </HeaderMenuContainer>
      </BodyColumn3>
      <Switch></Switch>
      {hidden ? (
        ""
      ) : (
        <OverlayBackground onClick={() => onClickHandler()}>
          <HeaderDropdown />
        </OverlayBackground>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100vw;
  height: 70px;
  border-bottom: 2px solid rgba(242, 242, 242, 1);
  /* display: flex; */
  /* flex-direction: row; */
  display: grid;
  grid-template-columns: 222px 1052px 646px;

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
  margin-right: auto;
  font-size: 1rem;
  /* padding: 0 224px; */

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
