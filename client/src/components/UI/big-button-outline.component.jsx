import React from "react";
import styled, { css } from "styled-components";

export const BigButtonOutline = (props) => {
  return (
    <OutlineContainer {...props}>
      <ButtonTitle>{props.children}</ButtonTitle>
    </OutlineContainer>
  );
};

const OutlineContainer = styled.div`
  width: 276px;
  /* height: 48px; */
  height: ${(props) => props.inputHeight || "48px"};

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  border-color: #707070;
  border-radius: 6px;
  border-style: solid;

  border-width: 1px;
  /* ${(props) =>
    props.profilePosition &&
    css`
      margin-left: 0.12rem;
    `} */

  :hover {
    cursor: pointer;
    color: #0277bd;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonTitle = styled.span`
  font-family: "Arimo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  color: #000000;
`;
