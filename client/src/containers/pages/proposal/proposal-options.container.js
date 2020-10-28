import React from "react";

import OptionContainer from "./option-container";

const ProposalOptions = (props) => {
  // console.log("[ ProposalOptions => standard :]", props);

  return (
    <div style={{ display: "flex" }}>
      <OptionContainer proposalOptionName={"standard"} />
      <OptionContainer proposalOptionName={"recomandat"} />
      <OptionContainer proposalOptionName={"premium"} />
    </div>
  );
};

export default ProposalOptions;
