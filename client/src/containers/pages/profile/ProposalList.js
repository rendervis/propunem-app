import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProposalList,
  proposalEdit,
} from "../../../redux/actions/proposal";

const ProposalList = ({ history }) => {
  const accountId = useSelector((state) => state.account.accountId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProposalList({ accountId }));
  }, []);
  const proposalList = useSelector((state) => state.proposal.proposalList);
  // console.log("proposalList", proposalList);

  const clickHandler = (proposalName, proposalId) => {
    dispatch(proposalEdit({ proposalName, proposalId }));
    history.push(`/propunere/${proposalName}`);
  };
  const renderNameList = () => {
    if (!proposalList) {
      return (
        <span
          style={{
            paddingTop: "1.6rem",
            paddingBottom: "1.38rem",
            marginLeft: "5.44rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Nu ai propuneri!
        </span>
      );
    }
    return proposalList.map((name) => {
      return (
        <span
          style={{
            marginBottom: "10px",
          }}
          onClick={() => clickHandler(name.proposal_name, name.proposal_id)}
        >
          {name.proposal_name}
        </span>
      );
    });
  };

  return (
    <div
      style={{
        paddingTop: "1.6rem",
        paddingBottom: "1.38rem",
        marginLeft: "5.44rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderNameList()}
    </div>
  );
};

export default withRouter(ProposalList);
