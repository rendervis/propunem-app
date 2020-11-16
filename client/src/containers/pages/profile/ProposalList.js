import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
///////actions
import {
  fetchProposalList,
  proposalEdit,
} from "../../../redux/actions/proposal";

const ProposalList = ({ history, ...props }) => {
  const accountId = useSelector((state) => state.account.accountId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProposalList({ accountId }));
  }, []);
  const proposalList = useSelector((state) => state.proposal.proposalList);
  // console.log("proposalList", proposalList);

  const clickHandler = (proposalName, proposalId) => {
    dispatch(proposalEdit({ proposalName, proposalId }));
    history.push(`/propunere/${proposalName}/${proposalId}`);
  };
  const renderNameList = (props) => {
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
        <StyledSpan
          {...props}
          onClick={() =>
            clickHandler(
              name.proposal_name.replace(/ +$/, "").replace(/\s/g, "-"),
              name.proposal_id
            )
          }
        >
          {name.proposal_name}
        </StyledSpan>
      );
    });
  };

  return (
    <div
      style={{
        paddingTop: "1.6rem",
        paddingBottom: "1.38rem",
        // marginLeft: "5.44rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderNameList(props)}
    </div>
  );
};

const StyledSpan = styled.span`
  margin-bottom: 10px;
  cursor: pointer;
  /* ${(props) =>
    props.black &&
    css`
      color: #000000;
    `} */
  pointer-events: ${(props) => props.noClick || "null"};
`;

export default withRouter(ProposalList);
