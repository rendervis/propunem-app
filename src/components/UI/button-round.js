import React from "react";
import { withRouter, NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const ButtonRound = ({ children, ...props }) => {
  let buttonText = children.replace(/\s+/g, "-").toLowerCase();
  let match = useRouteMatch();
  // <StyledNavLink key={buttonText} to={`${match.url}${"/" + buttonText}`}>

  return (
    <ButtonRoundStyled>
      <StyledNavLink key={buttonText} to={`${match.url}${"/" + buttonText}`}>
        <NavLinkText>{children}</NavLinkText>
      </StyledNavLink>
    </ButtonRoundStyled>
  );
};

const ButtonRoundStyled = styled.div`
  width: 180px;
  height: 36px;
  background-color: rgba(242, 242, 242, 0);
  border-radius: 18px;
  border-width: 2px;
  border-color: rgba(242, 242, 242, 1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  margin-bottom: -2px;

  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  display: flex;
  &.active {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const NavLinkText = styled.span`
  font-family: Arimo;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 32px;
  margin-right: auto;
`;

export default withRouter(ButtonRound);
