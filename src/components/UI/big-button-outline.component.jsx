import React from "react";
import styled, { css } from "styled-components";

export const BigButtonOutline = (props) => {
  return (
    <OutlineContainer>
      <ButtonTitle>{props.children}</ButtonTitle>
    </OutlineContainer>
  );
};

const OutlineContainer = styled.div`
  width: 276px;
  height: 48px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  /* margin-top: 2rem; */
  /* margin-right: 2.56rem; */

  /* background-color: rgba(255, 255, 255, 1); */
  border-color: #707070;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;

  ${(props) =>
    props.profilePosition &&
    css`
      margin-left: 0.12rem;
    `}
`;

const ButtonTitle = styled.span`
  font-family: "Arimo";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 1px;
  color: #000000;
`;
