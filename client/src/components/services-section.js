import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

///////icons///////////
import { styled as styledMaterial } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
///////actions
import {
  fetchHomepageAccounts,
  fetchSearchResults,
} from "../redux/actions/searchBar";
export default (props) => {
  let [startingPoint, setStartingPoint] = useState(0);
  let [endPoint, setEndPoint] = useState(3);
  const dispatch = useDispatch();
  /** state */
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { homepageAccounts } = useSelector((state) => state.searchBar);
  const { queryResult } = useSelector((state) => state.searchBar);
  const { status } = useSelector((state) => state.searchBar);
  /** events */
  const handleOnSearchInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    if (!query) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };
  const handleClickSearch = () => {
    dispatch(fetchSearchResults({ query }));
    setQuery("");
  };
  /** actions */
  useEffect(() => {
    dispatch(fetchHomepageAccounts());
  }, []);
  /** render methods */
  const renderAccounts = () => {
    let arrayOfAccounts = Object.values(homepageAccounts);
    let arrayOfQueryResult = Object.values(queryResult);
    if (Object.keys(queryResult).length !== 0) {
      return arrayOfQueryResult.map((account) => {
        return (
          <ServiceInfo>
            <ServiceOwner>
              {!account.companyName ? `Nume Companie` : account.companyName}
            </ServiceOwner>
            <ServiceText>
              {account.brandingText === null
                ? `Declaratia ta de branding este prezentata aici.`
                : account.brandingText}
            </ServiceText>
            <ServiceFooter>
              <PersonIcon />

              <ServiceContact>
                {!account.firstName && !account.surname
                  ? `Prenume Nume`
                  : account.firstName + " " + account.surname}
              </ServiceContact>
            </ServiceFooter>
          </ServiceInfo>
        );
      });
    } else {
      return arrayOfAccounts.slice(startingPoint, endPoint).map((account) => {
        return (
          <ServiceInfo>
            <ServiceOwner>
              {!account.companyName ? `Nume Companie` : account.companyName}
            </ServiceOwner>
            <ServiceText>
              {account.brandingText === null
                ? `Declaratia ta de branding este prezentata aici.`
                : account.brandingText}
            </ServiceText>
            <ServiceFooter>
              <PersonIcon />

              <ServiceContact>
                {!account.firstName && !account.surname
                  ? `Prenume Nume`
                  : account.firstName + " " + account.surname}
              </ServiceContact>
            </ServiceFooter>
          </ServiceInfo>
        );
      });
    }
  };

  // console.log("loading", loading);
  console.log("homepageAccounts", homepageAccounts);
  return (
    <ServicesSectionStyled>
      <SearchBar>
        <SearchInput
          type="text"
          value={query}
          id="services-search-input"
          placeholder="Cauta servicii "
          onChange={handleOnSearchInputChange}
        />
        <MySearchIcon onClick={handleClickSearch} />
      </SearchBar>

      <div style={{ height: "155px" }} />

      <ServiceRoll>
        <span
          onClick={() => (
            setEndPoint(endPoint - 3), setStartingPoint(startingPoint - 3)
          )}
        >
          <MyArrowBackIosIconLeft />
        </span>
        {renderAccounts()}
        <span
          onClick={() => (
            setEndPoint(endPoint + 3), setStartingPoint(startingPoint + 3)
          )}
          style={{
            display: "flex",
            alignContent: "flex-end",
          }}
        >
          <MyArrowForwardIosIconRight />
        </span>
      </ServiceRoll>
    </ServicesSectionStyled>
  );
};

const ServicesSectionStyled = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 283px 0 232px;
`;
const SearchBar = styled.div`
  background-color: white;
  // display: block;
  display: flex;
  flex-direction: row;
  align-items: center;
  float: left;
  /* position: relative; */

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
const MySearchIcon = styledMaterial(SearchIcon)({
  fontSize: "29px",
  margin: "12px",
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

// export default ServicesSection;
