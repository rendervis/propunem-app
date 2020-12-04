import React from "react";
import styled, { css } from "styled-components";

export const BigButtonOutline = (props) => {
  return (
    <ButtonStyled {...props}>
      <ButtonTitle>{props.children}</ButtonTitle>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: ${(props) => props.inputWidth || "276px"};
  /* height: 48px; */
  height: ${(props) => props.inputHeight || "48px"};

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  border-color: #707070;
  border-style: solid;
  border-width: 1px;
  border-radius: ${(props) => props.borderRadius || "6px"};

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  :hover {
    cursor: pointer;
    color: #0277bd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  }
  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      /* background-color: #000000; */
      border-color: #ffb3b3;
      backdrop-filter: blur(15px);
      box-shadow: 0 0 0;
    `}
`;

const ButtonTitle = styled.span`
  font-family: "Arimo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  color: #000000;
`;
