import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProposalList } from "../../../redux/actions/proposal";

export default () => {
  const accountId = useSelector((state) => state.account.accountId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProposalList({ accountId }));
  }, []);
  const proposalList = useSelector((state) => state.proposal.proposalList);
  console.log("proposalList", proposalList);

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
