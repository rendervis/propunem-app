import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
////COMPONENTS////
import PageTitle from "../../../components/UI/profile/page-title";
import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";
import ProposalList from "./ProposalList";
///////UI
import { TextSmall, TextRegular } from "../../../components/UI/ui-elements";
import {
  TopContainer,
  SecondaryMenu,
  ArrowOptions,
} from "../../../components/UI/profile/ui-profile";
///////UX
import ProposalForm from "../../../components/UX/ProposalForm";
///////ACTIONS
import { storeProposal } from "../../../redux/actions/proposal";

export default ({ history, ...props }) => {
  const dispatch = useDispatch();
  let proposalCount;
  let { path } = props.match;
  const accountId = useSelector((state) => state.account.accountId);
  /** need proposalList to display proposalCount */
  const proposalList = useSelector((state) => state.proposal.proposalList);
  proposalCount = proposalList ? proposalList.length : 0;

  const storeProposalHandler = ({ fields }) => {
    ///////placeholder value with "_" from ProposalForm gives the key name for fields
    console.log("[storeProposalHandler = ]", fields);

    if (Object.keys(fields).length === 0) {
      return alert("Nume Serviciu nu este completat");
    }
    dispatch(
      storeProposal({
        accountId,
        proposalName: `${fields.nume_serviciu}`,
        history,
      })
    );
  };

  // console.log("path", path);
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
            onContinue={storeProposalHandler}
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
      <ProposalList />
    </React.Fragment>
  );
};
