import React, { useEffect, useState } from "react";
import { Switch, NavLink, Link, Route, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { device } from "../configuration/device-sizes";
///////components
import ModalPresentation from "../components/UX/ModalPresentation";
import ModalPresentationOptions from "../components/UX/ModalPresentationOptions";
import HomePageAccounts from "./HomePageAccounts";
///////icons///////////
import { styled as styledMaterial } from "@material-ui/core/styles";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
///////actions
import {
  fetchHomepageAccounts,
  fetchSearchResults,
} from "../redux/actions/searchBar";

const ServicesSection = (props) => {
  let [startingPoint, setStartingPoint] = useState(0);
  let [endPoint, setEndPoint] = useState(3);
  // console.log({ props });
  // let { pathname } = props.location;

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
  const arrayOfAccounts = Object.values(homepageAccounts).filter(
    (account) => account.accountId
  );

  let arrayOfQueryResult = Object.values(queryResult);

  // console.log("loading", loading);

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
      {/*  height: "155px"  */}
      <div style={{ height: "14vh" }} />

      <ServiceRoll>
        <span
          onClick={() =>
            startingPoint === 0
              ? alert("nu mai sunt conturi!")
              : (setEndPoint(endPoint - 3), setStartingPoint(startingPoint - 3))
          }
        >
          <MyArrowBackIosIconLeft />
        </span>
        <HomePageAccounts arrayOfAccounts={arrayOfAccounts} />
        <span
          onClick={() =>
            endPoint - arrayOfAccounts.length >= 2 ||
            endPoint - arrayOfQueryResult.length >= 2
              ? alert("nu mai sunt conturi!")
              : (setEndPoint(endPoint + 3), setStartingPoint(startingPoint + 3))
          }
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
  width: 100vw;
  height: 53vh;

  /* padding: 0 283px 0 232px; */
  padding: 0 15vw 0 12vw;
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
  /* width: 360px; */
  width: 19vw;
  margin-top: 2.5rem;
  /* margin-left: 204px; */
  margin-left: 10.3vw;
  @media ${device.mobileL} {
    width: 65vw;
  }
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
  /* right: 16.375rem; */
  // flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileL} {
    flex-wrap: wrap;
    margin-top: 2rem;
    overflow: auto;
    height: 31vh;
  }

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
  "@media (max-width: 425px)": {
    display: "none",
  },
});
const MyArrowForwardIosIconRight = styledMaterial(ArrowForwardIosIcon)({
  fontWeight: "bolder",
  color: "#bbbbbb",
  fontSize: "5rem",
  position: "relative",
  marginRight: "0",
  marginLeft: "auto",
  cursor: "pointer",
  "@media (max-width: 425px)": {
    display: "none",
  },
});
const MySearchIcon = styledMaterial(SearchIcon)({
  fontSize: "29px",
  margin: "12px",
  cursor: "pointer",
});

export default withRouter(ServicesSection);
