import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";

///
import HeaderDropdown from "../components/header-dropdown/header-dropdown";

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LogoText> PROPUNEM</LogoText>
        <HeaderMenuContainer>
          <HeaderText>DESPRE NOI</HeaderText>
          <HeaderText>PRET</HeaderText>
          <HeaderText>CONTACT</HeaderText>
          <Link to="/inregistrare">
            <RegistrationButton>
              <RegistrationButtonText>INREGISTRARE</RegistrationButtonText>
            </RegistrationButton>
          </Link>
          <MenuCircle>
            <MenuIcon />
          </MenuCircle>
        </HeaderMenuContainer>
        <Switch></Switch>
        <HeaderDropdown />
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.header`
  width: 100vw;
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid rgba(242, 242, 242, 1);
`;

const LogoText = styled.div`
  margin-right: auto;
  font-size: 1rem;
  padding: 0 14rem;

  font-family: "Lora";
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: 2px;
  text-align: left;
  color: #000000;
`;
const HeaderMenuContainer = styled.div`
  margin-right: 0;
  float: right;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  margin: 0 16.375rem;
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
`;

export default Header;
