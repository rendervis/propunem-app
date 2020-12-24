import React from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocumentOnHomePage from "./MyDocumentOnHomePage";
import _ from "lodash";
class RenderPdfOnHomePage extends React.Component {
  render() {
    // console.log("[RenderPdfOnHomepage -->>this.props.showPdf]", this.props);
    const { companyName } = this.props;
    const { proposalTitle } = this.props.match.params;
    const isName = (userInformation) =>
      userInformation.companyName === companyName;
    const account = Object.values(this.props.accounts).filter(
      (val) => val.userInformation && isName(val.userInformation)
    );
    const { offer } = this.props.accounts;
    const brandingDeclaration = _.mapKeys(
      account[0].brandingDeclarationDB,
      "account[0].brandingDeclarationDB.text_id"
    );

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
            justifyContent: "center",

            alignItems: "center",
            textAlign: "center",
            width: "100vw",
            height: "100vh",

            backdropFilter: "blur(2px)",
          }}
        >
          <PDFViewer
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <MyDocumentOnHomePage
              userInformation={account[0].userInformation}
              aboutUsText={offer.aboutUsText}
              brandingDeclaration={account[0].brandingDeclarationDB}
              proposalList={account[0].proposalList}
              ourApproach={offer.ourApproachText}
              offerCards={offer.offerCards}
              selected={proposalTitle}
              priceTag={this.props.optionCard[proposalTitle].priceTag}
            />
          </PDFViewer>
        </div>
      </BrowserRouter>
    );
  }
}
// export const DownloadPdf = () => (
//   <div>
//     <PDFDownloadLink
//       document={<MyDocumentOnHomePage />}
//       fileName="somename.pdf"
//     >
//       {({ blob, url, loading, error }) => {
//         console.log("download");
//         return loading ? "Loading document..." : "Descarca!";
//       }}
//     </PDFDownloadLink>
//   </div>
// );

const mapStateToProps = (state) => {
  // console.log("state");
  return {
    /**
     * data from Redux store
     */
    accounts: state.searchBar.homepageAccounts,
    optionCard: state.optionCard.optionCard,
  };
};

export default withRouter(connect(mapStateToProps)(RenderPdfOnHomePage));
