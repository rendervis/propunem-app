import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import MyDocument from "./MyDocument";

const RenderPdf = (props) => {
  //TODO dispatch actions to update data from store
  /**
   * data from Redux store
   */
  const { userInformation } = useSelector((state) => state.userInformation);
  const aboutUsText = useSelector((state) => state.aboutUsText.aboutUsText);
  let brandingDeclaration = useSelector(
    (state) => state.branding.brandingDeclarationDB[1].text
  );
  const proposalList = useSelector((state) => state.proposal.proposalList);
  const ourApproach = useSelector((state) => state.ourApproachText.ourApproach);

  /**Return */
  return ReactDOM.render(
    <BrowserRouter>
      <PDFViewer
        style={{
          position: "fixed",
          left: "auto",
          right: "auto",
          top: 0,

          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // zIndex: "101",
          width: "100vw",
          height: "100vh",
          // backgroundColor: "red",
        }}
      >
        <MyDocument
          userInformation={userInformation}
          aboutUsText={aboutUsText}
          brandingDeclaration={brandingDeclaration}
          proposalList={proposalList}
          ourApproach={ourApproach}
        />
      </PDFViewer>
    </BrowserRouter>,
    document.getElementById("render_pdf")
  );
};
export const DownloadPdf = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => {
        return loading ? "Loading document..." : "Descarca!";
      }}
    </PDFDownloadLink>
  </div>
);

export default withRouter(RenderPdf);
