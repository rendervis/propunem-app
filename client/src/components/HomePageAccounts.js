import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
///////components
import ModalPresentation from "../components/UX/ModalPresentation";
import ModalPresentationOptions from "../components/UX/ModalPresentationOptions";
import RenderPdfOnHomePage from "../containers/pages/proposal/my_pdf_document/RenderPdfOnHomePage";
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
            <NavLink
              exact
              to={`/${account.userInformation.companyName}`}
              activeClassName="selected"
            >
              <ServiceOwner>
                {!account.userInformation.companyName
                  ? `Nume Companie`
                  : account.userInformation.companyName}
              </ServiceOwner>
            </NavLink>
            <ServiceText>
              {account.brandingDeclarationDB.text === null
                ? `Declaratia ta de branding este prezentata aici.`
                : account.brandingDeclarationDB.text}
            </ServiceText>
            <ServiceFooter>
              <PersonIcon />

              <ServiceContact>
                {!account.userInformation.firstName &&
                !account.userInformation.surname
                  ? `Prenume Nume`
                  : account.userInformation.firstName +
                    " " +
                    account.userInformation.surname}
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
            <Route
              exact
              path={`/:companyName/:proposalName/:proposalId/:proposalTitle`}
              render={(props) => {
                return (
                  <RenderPdfOnHomePage
                    companyName={props.match.params.companyName}
                  />
                );
              }}
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
