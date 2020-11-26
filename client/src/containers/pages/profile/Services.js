import React from "react";

///////components
import ProposalList from "./ProposalList";
import BrandingDeclaration from "./BrandingDeclaration";

export default () => {
  return (
    <React.Fragment>
      <h1>SERVICII</h1>
      <BrandingDeclaration style={{ marginTop: "16px" }} />
      <li
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "flex-start",
          zIndex: "-1",
          overflowX: "hidden",

          overflow: "auto",
          marginTop: "4px",
          paddingBottom: "75px",
          marginBottom: "50px",
          // backgroundColor: "red",
        }}
      >
        <ProposalList noClick="none" />
      </li>
    </React.Fragment>
  );
};
