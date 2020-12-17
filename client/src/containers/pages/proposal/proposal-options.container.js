import React from "react";
import { useSelector } from "react-redux";

import OptionContainer from "./option-container";

const ProposalOptions = (props) => {
  // console.log("[ ProposalOptions => standard :]", props);
  const optionCard = useSelector((state) => state.optionCard.optionCard);
  return (
    <div style={{ display: "flex" }}>
      <OptionContainer
        proposalOptionName={"standard"}
        {...optionCard.standard}
      />
      <OptionContainer
        proposalOptionName={"recomandat"}
        {...optionCard.recomandat}
      />
      <OptionContainer proposalOptionName={"premium"} {...optionCard.premium} />
    </div>
  );
};

export default ProposalOptions;
