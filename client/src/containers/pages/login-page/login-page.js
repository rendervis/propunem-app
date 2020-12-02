import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styled, { css } from "styled-components";

///////components
import Header from "../../header.container";
import Login from "./login";
import Signup from "./signup";

import { device } from "../../../configuration/device-sizes";

class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div
          style={{
            width: "100vw",
            height: "100vh",
            left: "0",
            top: "0",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginBoxStyled>
            <LoginBoxHeader>
              <LiStyled>
                <NavLinkStyled left to="/account/login">
                  Intra in cont
                </NavLinkStyled>
              </LiStyled>
              <LiStyled>
                <NavLinkStyled right to="/account/signup">
                  Creeaza un cont
                </NavLinkStyled>
              </LiStyled>
            </LoginBoxHeader>
            <div style={{ height: "22px" }}></div>

            <LoginBoxContentStyled>
              <Switch>
                <Route path="/account/login" component={Login} />
                <Route path="/account/signup" component={Signup} />
              </Switch>
            </LoginBoxContentStyled>
          </LoginBoxStyled>
        </div>
      </React.Fragment>
    );
  }
}
const LoginBoxStyled = styled.div`
  width: 380px;
  height: 504px;
  /* width: 20vw; */
  /* height: 47vh; */
  margin: 8% auto;

  background: #fff;
  color: #71848d;
  padding: 0 25px;
  border-radius: 18px;
  @media ${device.mobileL} {
    width: 100%;
    height: 100%;
    padding: 25px 25px;
  }
`;
const LoginBoxContentStyled = styled.ul`
  padding-top: 80px;
`;

const LoginBoxHeader = styled.div`
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-shadow: inset 0 -1px 0 0 #7f9799;
  color: #71848d;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.015em;
`;
const LiStyled = styled.li`
  width: 50%;
  display: inline-block;
  font-size: 14px;
  line-height: 1.29;
  @media ${device.mobileL} {
    font-size: 12px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  font-weight: inherit;
  display: block;
  padding: 20px;
  color: #002f34;
  position: relative;
  font-size: inherit;
  line-height: 1.29;
  transition: width 0.5s ease-in-out;
  &:before {
    content: "";
    height: 3px;
    width: 0;
    background: #002f34;
    position: absolute;
    bottom: 0;
    transition: width 0.5s ease-in-out;
    ${(props) =>
      props.left &&
      css`
        right: 0;
      `}
    ${(props) =>
      props.right &&
      css`
        left: 0;
      `}
  }
  &.active {
    &:before {
      transition: width 0.5s ease-in-out;
      width: 100%;
    }
    ${(props) =>
      props.left &&
      css`
        left: auto;
        font-weight: bolder;
      `}
    ${(props) =>
      props.right &&
      css`
        right: auto;
        font-weight: bolder;
      `}
  }
`;

const RegisterStyled = styled.li``;

export default LoginPage;
