import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styled, { css } from "styled-components";

///////components
import Header from "../../header.container";
import Login from "./login";

import OverlayBackground from "../../../components/UX/overlay-background";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    //     try {
    //       await auth.signInWithEmailAndPassword(email, password);
    //       this.setState({ email: "", password: "" });
    //     } catch (error) {
    //       console.log(error.message);
    //     }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div
          style={{
            width: "100%",
            height: "100%",
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
                <NavLinkStyled left to="/inregistrare/login">
                  Intra in cont
                </NavLinkStyled>
              </LiStyled>
              <LiStyled>
                <NavLinkStyled right to="/inregistrare/register">
                  <p>Creeaza un cont</p>
                </NavLinkStyled>
              </LiStyled>
            </LoginBoxHeader>
            <div style={{ height: "22px" }}></div>

            <LoginBoxContentStyled>
              <Switch>
                <Route path="/inregistrare/login" component={Login} />
              </Switch>

              <RegisterStyled></RegisterStyled>
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
  margin: 8% auto;

  background: #fff;
  color: #71848d;
  padding: 0 25px;
  border-radius: 18px;
`;
const LoginBoxContentStyled = styled.ul`
  padding-top: 80px;
`;

const LoginBoxHeader = styled.div`
  left: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-shadow: inset 0 -1px 0 0 #7f9799;
  color: #71848d;
  /* color: #000000; */

  /* font-family: Comfortaa; */
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
`;

const Line = styled.div`
  width: 330px;
  height: 1px;
  left: 0;

  background: #c4c4c4;
`;
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  font-weight: inherit;
  display: block;
  padding: 20px;
  color: #002f34;
  position: relative;
  font-size: 14px;
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
const ActiveLine = styled.div`
  height: 3px;
  width: 100%;
  background: #002f34;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;

  transition: width 0.5s ease-in-out;
  color: ${(props) => props.theme.orange};
`;
const RegisterStyled = styled.li``;

export default LoginPage;
