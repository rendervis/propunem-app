import React from "react";
import ReactDOM from "react-dom";
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

///////COMPONENTS
import OverlayBackground from "../UX/overlay-background";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>Mare text</Text>
      </View>
    </Page>
  </Document>
);
// const doc = (
//   <Document style={{ height: "500px", width: "500px" }}>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Hello World!</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>We're inside a PDF!</Text>
//       </View>
//     </Page>
//   </Document>
// );

const RenderPdf = (props) => {
  return ReactDOM.render(
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
      <MyDocument />
    </PDFViewer>,
    document.querySelector("#render_pdf")
  );
};
// const RenderPdf = (props) => {
//   return ReactDOM.render(
//     <div
//       style={{
//         position: "fixed",
//         left: 0,
//         top: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: "101",
//         width: "500px",
//         height: "500px",
//         backgroundColor: "red",
//       }}
//     >
//       <li>ANAAAAAAAAAAAAAAAA</li>
//     </div>,
//     document.getElementById("render_pdf")
//   );
// };

// const RenderPdf = (props) => {
//   return ReactPDF.render(doc);
// };

// export default ReactDOM.render(
//   <RenderPdf />,
//   document.querySelector("#render_pdf")
// );
// export default ReactDOM.createPortal(
//   <RenderPdf />,
//   document.querySelector("#render_pdf")
// );

// ReactDOM.render(<RenderPdf />, document.querySelector("#render_pdf"));
export default RenderPdf;
