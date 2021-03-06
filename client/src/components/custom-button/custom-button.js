import React from "react";
import styled from "styled-components";
import { device } from "../../configuration/device-sizes";

const CustomButton = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

const ButtonStyled = styled.button`
  width: 330px;
  height: 50px;

  /* border: none; */
  border: 1px solid #777;
  border-radius: 6px;
  box-sizing: 0;

  display: flex;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 120px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  background-color: white;
  color: black;

  cursor: pointer;
  @media ${device.mobileL} {
    width: 85%;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    background-color: #ec5252;
    color: white;

    border: 1px solid #777;
  }
`;

export default CustomButton;
