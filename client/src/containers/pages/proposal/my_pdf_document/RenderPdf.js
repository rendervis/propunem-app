import React from "react";
import { BrowserRouter, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import MyDocument from "./MyDocument";

class RenderPdf extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  //TODO dispatch actions to update data from store

  render() {
    console.log("[RenderPdf -->>this.props.showPd]", this.props);
    // console.log("[RenderPdf -->>state]", this.state);
    /**Return */
    return (
      <BrowserRouter>
        <div
          onClick={() => this.props.history.goBack()}
          style={{
            position: "absolute",
            top: "0",
            left: "auto",
            right: "0",
            padding: "0 16vw",
            display: "flex",
            // alignSelf: "center",
            justifyContent: "center",

            alignItems: "center",
            textAlign: "center",
            width: "100vw",
            height: "100vh",
            // backgroundColor: "red",
            backdropFilter: "blur(2px)",
          }}
        >
          <PDFViewer
            style={{
              // position: "absolute",
              // left: "275px",
              // right: "auto",
              // top: "75px",
              width: "100%",
              height: "100%",
            }}
          >
            <MyDocument
              userInformation={this.props.userInformation}
              aboutUsText={this.props.aboutUsText}
              brandingDeclaration={this.props.brandingDeclaration}
              proposalList={this.props.proposalList}
              ourApproach={this.props.ourApproach}
              offerCards={this.props.offerCards}
              optionCard={this.props.optionCard}
            />
          </PDFViewer>
        </div>
      </BrowserRouter>
    );
  }
}
export const DownloadPdf = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => {
        return loading ? "Loading document..." : "Descarca!";
      }}
    </PDFDownloadLink>
  </div>
);

const mapStateToProps = (state) => {
  // console.log("state");
  return {
    /**
     * data from Redux store
     */
    userInformation: state.userInformation.userInformation,
    aboutUsText: state.aboutUsText.aboutUsText,
    brandingDeclaration: state.branding.brandingDeclarationDB,
    proposalList: state.proposal.proposalList,
    ourApproach: state.ourApproachText.ourApproachText,
    offerCards: state.offerCards.offerCards,
    optionCard: state.optionCard.optionCard,
  };
};

export default withRouter(connect(mapStateToProps)(RenderPdf));
