import React, { useEffect, useState } from "react";
import { Switch, NavLink, Link, Route, withRouter } from "react-router-dom";
///////components
import ModalPresentation from "../components/UX/ModalPresentation";
import ModalPresentationOptions from "../components/UX/ModalPresentationOptions";
///////UI
import styled from "styled-components";
import { device } from "../configuration/device-sizes";
///////icons///////////
import { styled as styledMaterial } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
const HomePageAccounts = ({ arrayOfAccounts, startingPoint, endPoint }) => {
  console.log("HomePageAccounts");
  return arrayOfAccounts
    .slice(startingPoint, endPoint)
    .map((account, index) => {
      return (
        <React.Fragment key={account.accountId}>
          <ServiceInfo>
            <Link
              exact
              to={`/${account.companyName}`}
              activeClassName="selected"
            >
              <ServiceOwner>
                {!account.companyName ? `Nume Companie` : account.companyName}
              </ServiceOwner>
            </Link>
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
          <Switch>
            <Route
              exact
              path={`/:companyName`}
              render={() => <ModalPresentation account={account} />}
            ></Route>

            <Route
              exact
              path={`/:companyName/:proposalName/:proposalId`}
              render={() => <ModalPresentationOptions />}
              //  component={ProposalForm}
            />
          </Switch>
        </React.Fragment>
      );
    });
};
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

export default HomePageAccounts;
