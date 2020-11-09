import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";
import ProposalForm from "./ProposalForm";
////ui-elements////
import { TextSmall, TextRegular } from "../../../components/UI/ui-elements";
import {
  TopContainer,
  SecondaryMenu,
  ArrowOptions,
} from "../../../components/UI/profile/ui-profile";

export default (props) => {
  let { path } = props.match;
  let proposalCount;
  const proposalList = useSelector((state) => state.proposal.proposalList);
  proposalCount = proposalList ? proposalList.length : 0;

  // const [visible, setVisible] = useState(false);

  console.log("path", path);
  return (
    <React.Fragment>
      <Route
        exact
        path={`${path}/alerta`}
        render={(props) => (
          <ProposalForm
            {...props}
            title="Vezi cat de repede poti sa scrii o propunere"
            fadedLine="Introduci numele serviciului"
            secondaryTitle="esti cu un pas mai aproape!"
            placeholder="Nume Serviciu"
          />
        )}
        //  component={ProposalForm}
      />

      <PageTitle>Profil</PageTitle>
      <TopContainer>
        <div style={{ marginLeft: "1.88rem" }}>
          <TextSmall
            style={{
              paddingTop: "1.38rem",
              paddingBottom: "1.38rem",
              marginLeft: "3.56rem",
            }}
          >
            Click pentru editare
          </TextSmall>
          <Link to={`${path}/alerta`}>
            <BigButtonOutline profilePosition>
              Adauga Propunere
            </BigButtonOutline>
          </Link>
        </div>
        <SecondaryMenu>
          <TextRegular black style={{ padding: "0 4.16vw" }}>
            {` ${proposalCount} Propuneri`}
          </TextRegular>
          <ArrowOptions>
            <TextRegular black>Toate</TextRegular>
            <ArrowDropDownIcon />
          </ArrowOptions>
        </SecondaryMenu>
      </TopContainer>
    </React.Fragment>
  );
};
