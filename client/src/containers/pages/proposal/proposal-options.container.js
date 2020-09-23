import React from "react";

import OptionContainer from "./option-container";

const ProposalOptions = (props) => {
  // console.log("[ ProposalOptions => standard :]", props);

  return (
    <div style={{ display: "flex" }}>
      <OptionContainer title={"standard"} />
      <OptionContainer title={"recomandat"} />
      <OptionContainer title={"premium"} />
    </div>
  );
};

export default ProposalOptions;
