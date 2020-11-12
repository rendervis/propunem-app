import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import MyDocument from "./MyDocument";

const RenderPdf = (props) => {
  /**
   * data from Redux store
   */
  //TODO dispatch actions to update data from store
  const { userInformation } = useSelector((state) => state.userInformation);
  const aboutUs = useSelector((state) => state.aboutUsText.aboutUs);
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
        <MyDocument userInformation={userInformation} aboutUs={aboutUs} />
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
