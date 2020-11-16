import React from "react";

///////components
import ProposalList from "./ProposalList";
import BrandingDeclaration from "./BrandingDeclaration";

export default () => {
  return (
    <React.Fragment>
      <h1>SERVICII</h1>
      <BrandingDeclaration style={{ marginTop: "16px" }} />
      <ProposalList noClick="none" />
    </React.Fragment>
  );
};
