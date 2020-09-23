import React from "react";
import styled from "styled-components";

///// COMPONENTS /////
import HeroSection from "../../../components/hero-section";
import ServicesSection from "../../../components/services-section";
import Header from "../../header.container";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Header />
      <HeroSection />
      <ServicesSection />
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default HomePage;
