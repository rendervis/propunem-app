import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const ServicesAndCapabilities = (props) => {
  let [brandingText, setBrandingText] = useState(
    "Declaratia ta de branding vine aici!"
  );
  const proposalList = useSelector((state) => state.proposal.proposalList);
  const { brandingDeclarationDB } = useSelector((state) => state.branding);
  useEffect(() => {
    if (brandingDeclarationDB[1]) {
      setBrandingText(brandingDeclarationDB[1].text);
    }
  }, [brandingDeclarationDB]);
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
      return <StyledSpan {...props}>{name.proposal_name}</StyledSpan>;
    });
  };

  return (
    <div>
      <div style={{ fontSize: "8px" }}>BRANDING DECLARATION</div>
      <div style={{ marginTop: "16px" }}>{brandingText}</div>

      <div
        style={{
          paddingTop: "1.6rem",
          paddingBottom: "1.38rem",
          // marginLeft: "5.44rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {renderNameList()}
      </div>
    </div>
  );
};

const StyledSpan = styled.span`
  margin-bottom: 10px;
`;

export default ServicesAndCapabilities;
