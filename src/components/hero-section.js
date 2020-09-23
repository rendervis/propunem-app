import React from "react";
import styled from "styled-components";

const HeroSection = () => (
  <HeroSectionStyled>
    <LogoText>Propunem</LogoText>
    <HeroText>Daca timpul este important pentru tine.</HeroText>
  </HeroSectionStyled>
);

const HeroSectionStyled = styled.div`
  height: 430px;
  width: 100%;
  background-color: rgba($color: #f2f2f2, $alpha: 1);
`;

const LogoText = styled.div`
  position: absolute;
  font-family: "Lora";
  font-size: 40px;
  margin-top: 8.875rem;
  margin-left: 27.0625rem;
`;

const HeroText = styled.p`
  font-family: "Arimo";
  font-size: 20px;
  position: absolute;
  margin-top: 14.25rem;
  margin-left: 27.1875rem;
`;

export default HeroSection;
