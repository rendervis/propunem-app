import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export default StyleSheet.create({
  page: {
    margin: 0,
    padding: 0,
    // paddingTop: 35,
    // paddingBottom: 65,
    // paddingHorizontal: 35,
    flexDirection: "column",
  },
  cover: {
    paddingTop: 140,
    paddingLeft: 107,
    margin: 0,
  },
  logo: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "normal",
    fontStretch: "normal",
    lineHeight: 1.2,
  },
  clientName: {
    marginTop: 64,
    fontSize: 44,
    textAlign: "justify",
  },
  projectTitle: {
    marginTop: 14,
    fontSize: 26,
    textAlign: "justify",
  },
  decorationLine: {
    width: 382,
    height: 6,
    backgroundColor: "black",
  },
  decorationLineMedium: {
    width: 182,
    height: 6,
    backgroundColor: "#535353",
  },
  decorationLineSmall: {
    width: 150,
    height: 6,
    backgroundColor: "#E2E2E2",
  },
  senderName: {
    marginTop: 14,
    fontSize: 9,
    textAlign: "justify",
  },
  jobTitle: {
    marginTop: 3,
    fontSize: 6,
    textAlign: "justify",
  },
  address: {
    marginTop: 14,
    fontSize: 6,
    textAlign: "justify",
  },
  webAddress: {
    marginTop: 10,
    fontSize: 9,
    textAlign: "justify",
  },

  text: {
    margin: 12,
    fontSize: 12,
    textAlign: "left",
  },
  cornerPageLogo: {
    position: "absolute",
    bottom: 56,
    right: 20,
    fontSize: 16,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
