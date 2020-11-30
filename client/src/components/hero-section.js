import React from "react";
import styled from "styled-components";

const HeroSection = () => (
  <HeroSectionStyled>
    <LogoText>Propunem</LogoText>
    <HeroText>Daca timpul este important pentru tine.</HeroText>
  </HeroSectionStyled>
);

const HeroSectionStyled = styled.div`
  /* height: 430px; */
  height: 40vh;
  width: 100%;
  background-color: rgba($color: #f2f2f2, $alpha: 1);
`;

const LogoText = styled.div`
  position: absolute;
  font-family: "Lora";
  font-size: 2.5rem;
  /* margin-top: 142px; */
  margin-top: 13vh;
  /* margin-left: 433px; */
  margin-left: 23vw;
`;

const HeroText = styled.p`
  font-family: "Arimo";
  font-size: 1.25rem;
  position: absolute;
  /* margin-top: 228px; */
  margin-top: 21vh;
  /* margin-left: 435px; */
  margin-left: 23vw;
`;

export default HeroSection;
