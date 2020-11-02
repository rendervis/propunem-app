import React from "react";
import styled from "styled-components";

///////icons///////////
import { styled as styledMaterial } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ServicesSection = () => (
  <ServicesSectionStyled>
    <SearchBar>
      <SearchInput
        id="services-search-input"
        type="search"
        placeholder="Cauta servicii "
      />
    </SearchBar>
    <div style={{ height: "25px" }}></div>
    <ServiceRoll>
      <MyArrowBackIosIconLeft />
      <ServiceInfo>
        <ServiceOwner>Nume Firma</ServiceOwner>
        <ServiceText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore
        </ServiceText>
        <ServiceFooter>
          <PersonIcon />

          <ServiceContact>Prenume Nume</ServiceContact>
        </ServiceFooter>
      </ServiceInfo>
      <div
        style={{
          display: "flex",
          alignContent: "flex-end",
        }}
      >
        <MyArrowForwardIosIconRight />
      </div>
    </ServiceRoll>
  </ServicesSectionStyled>
);

const ServicesSectionStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 283px 0 232px;
`;
const SearchBar = styled.div`
  background-color: white;
  // display: block;

  float: left;
  position: relative;

  border: 2px solid rgba($color: #777777, $alpha: 1);
  border-radius: 25px;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1);

  height: 3.125rem;
  width: 22.5rem;
  margin-top: 2.5rem;
  margin-left: 204px;
`;
const SearchInput = styled.input`
  border: 0;
  width: 100%;
  height: 3.125rem;
  //   border-radius: 50px;

  box-shadow: none;
  background: transparent;
  //   background: #f7f7f8;
  display: inline-block;

  padding: 0 40px 0 30px;
  margin: 0;
  outline-width: 0;

  font-family: "Arimo";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;

  color: #bbbbbb;
  -webkit-appearance: textfield;
`;
const ServiceRoll = styled.div`
  width: 100%;
  height: 6.5rem;
  padding: 0;
  /* position: absolute; */
  /* left: 13.75rem; */
  /* margin-top: 8.375rem; */
  /* right: 16.375rem; */
  // flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;
const MyArrowBackIosIconLeft = styledMaterial(ArrowBackIosIcon)({
  fontWeight: "bolder",
  color: "#bbbbbb",
  fontSize: "5rem",
  // marginRight: "2.225rem",
  // marginLeft: "0",
  cursor: "pointer",
  position: "relative",
});
const MyArrowForwardIosIconRight = styledMaterial(ArrowForwardIosIcon)({
  fontWeight: "bolder",
  color: "#bbbbbb",
  fontSize: "5rem",
  position: "relative",
  marginRight: "0",
  marginLeft: "auto",
  cursor: "pointer",
});
const ServiceInfo = styled.div`
  width: 22.5rem;
  height: 6.5rem;
  /* margin: 0 204px; */
  margin-right: auto;
  margin-left: 124px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ServiceOwner = styled.h1`
  font-family: "Arimo";
  font-size: 14px;
  font-weight: bold;
  color: #000000;
`;

const ServiceText = styled.p`
  font-family: "Arimo";
  font-size: 14px;
  font-weight: normal;
  color: #000000;
  margin: 1rem 0;
`;
const ServiceFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ServiceContact = styled.h1`
  font-family: "Arimo";
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-left: 0.625rem;
`;

export default ServicesSection;
