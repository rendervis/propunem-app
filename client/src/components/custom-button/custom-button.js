import React from "react";
import styled from "styled-components";

const CustomButton = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

const ButtonStyled = styled.button`
  width: 330px;
  height: 50px;

  border: none;
  box-sizing: 0;
  background-color: #ec5252;
  color: white;

  display: flex;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 120px;
  /* margin: 0 5px; */
  padding: 0 35px 0 35px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export default CustomButton;
