import React, { useEffect, useState } from "react";
import { Switch, NavLink, Route, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { device } from "../configuration/device-sizes";
///////components
import ModalPresentation from "../components/UX/ModalPresentation";
import ModalPresentationOptions from "../components/UX/ModalPresentationOptions";
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

const ServicesSection = (props) => {
  // console.log({ props });
  // let { pathname } = props.location;
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
  let arrayOfAccounts = Object.values(homepageAccounts);
  let arrayOfQueryResult = Object.values(queryResult);
  const renderAccounts = () => {
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
      return arrayOfAccounts
        .slice(startingPoint, endPoint)
        .map((account, index) => {
          return (
            <React.Fragment key={account.accountId}>
              <ServiceInfo>
                <NavLink
                  exact
                  to={`/${account.companyName}`}
                  activeClassName="selected"
                >
                  <ServiceOwner>
                    {!account.companyName
                      ? `Nume Companie`
                      : account.companyName}
                  </ServiceOwner>
                </NavLink>
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
                <Switch>
                  <Route
                    exact
                    path={`/:companyName`}
                    render={(props) => <ModalPresentation {...account} />}
                    //  component={ProposalForm}
                  />
                  <Route
                    exact
                    path={`/:companyName/:proposalName/:proposalId`}
                    render={(props) => (
                      <ModalPresentationOptions {...account} />
                    )}
                    //  component={ProposalForm}
                  />
                </Switch>
              </ServiceInfo>
            </React.Fragment>
          );
        });
    }
  };

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
        {renderAccounts()}
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
const ServiceInfo = styled.div`
  width: 22.5rem;
  height: 6.5rem;
  /* margin: 0 204px; */
  margin-right: auto;
  margin-left: 6vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.mobileL} {
    width: 80vw;
    margin-top: 1.5rem;
    height: 4.7rem;
  }
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
  @media ${device.mobileL} {
    margin: 0.2rem 0;
  }
`;
const ServiceFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${device.mobileL} {
    flex: 0.35;
  }
`;
const ServiceContact = styled.h1`
  font-family: "Arimo";
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-left: 0.625rem;
`;

export default withRouter(ServicesSection);
