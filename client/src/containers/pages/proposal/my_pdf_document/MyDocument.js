import React, { useState } from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import styles from "./styles";

//TODO include MyDocument in redux STORE and receive data via STORE and not props

// Create Document Component
export default (props) => {
  const [userInformation, setUserInformation] = useState(props.userInformation);
  const [aboutUsText, setAboutUsText] = useState(
    Object.values(props.aboutUsText)
  );
  const [brandingDeclaration, setBrandingDeclaration] = useState(
    props.brandingDeclaration
  );
  const [proposalList, setProposalList] = useState(props.proposalList);
  const [ourApproach, setOurApproach] = useState(
    Object.values(props.ourApproach)
  );

  const [offerCards, setOfferCards] = useState(Object.values(props.offerCards));
  let {
    address,
    city,
    companyName,
    county,
    firstName,
    jobTitle,
    surname,
    telephone,
    webAddress,
  } = userInformation;
  const [selectedOption, setSelectedOption] = useState(
    props.selected || "premium"
  );

  /**** return DATE ****/
  const date = () => {
    // const monthNames = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    const monthNames = [
      "Ianuarie",
      "Februarie",
      "Martie",
      "Aprilie",
      "Mai",
      "Iunie",
      "Iulie",
      "August",
      "Septembrie",
      "Octombrie",
      "Noiembrie",
      "Decembrie",
    ];
    const newDate = new Intl.DateTimeFormat();
    const f_date = (m_ca, m_it) => Object({ ...m_ca, [m_it.type]: m_it.value });
    const date = newDate.formatToParts().reduce(f_date, {});
    return date.day + " " + monthNames[date.month - 1] + ", " + date.year;
  };
  /**** AboutUs ****/
  const renderAboutUsText = () => {
    if (aboutUsText.length === 0) {
      return (
        <Text style={styles.text}>
          Oh, how I wish I could believe or understand that!There's only one
          reasonable course of action now:kill Flexo! Yes, except the Dave
          Matthews Banddoesn't rock. Kif might! If rubbin' frozen dirt in
          yourcrotch is wrong, hey I don't wanna be right.
        </Text>
      );
    } else {
      return aboutUsText.map((about, index) => {
        // console.log("about.about_text", about.about_text);
        return (
          <React.Fragment key={about.text_id}>
            <Text style={styles.text}>{about.about_text}</Text>
          </React.Fragment>
        );
      });
    }
  };
  /**** Branding Declaration */
  const renderBrandingDeclaration = () => {
    if (Object.keys(brandingDeclaration).length === 0) {
      return (
        <Text style={{ width: 474, fontSize: 13 }}>
          Oh, how I wish I could believe or understand that!There's only one
          reasonable course of action now:kill Flexo! Yes, except the Dave
          Matthews Banddoesn't rock. Kif might! If rubbin' frozen dirt in
          yourcrotch is wrong, hey I don't wanna be right.
        </Text>
      );
    } else {
      return (
        <Text style={{ width: 474, fontSize: 13 }}>
          {brandingDeclaration[1].text}
        </Text>
      );
    }
  };
  /**** proposalList */
  const renderServices = () => {
    if (!proposalList) {
      return (
        <Text style={{ fontSize: 6, fontWeight: 700, marginTop: 9 }}>
          nu sunt servicii
        </Text>
      );
    }
    return proposalList.map((name) => {
      return (
        <Text
          key={name.proposal_name}
          style={{ fontSize: 6, fontWeight: 700, marginTop: 9 }}
        >
          {name.proposal_name}
        </Text>
      );
    });
  };
  /**** ourApproach */
  const renderOurApproach = () => {
    if (ourApproach.length === 0) {
      return (
        <View>
          <Text style={{ width: 474, fontSize: 13 }}>
            Oh, how I wish I could believe or understand that!There's only one
            reasonable course of action now:kill Flexo! Yes, except the Dave
            Matthews Banddoesn't rock. Kif might! If rubbin' frozen dirt in
            yourcrotch is wrong, hey I don't wanna be right.
          </Text>
        </View>
      );
    } else {
      return ourApproach.map((card, index) => {
        return (
          <React.Fragment key={card.key}>
            <Text style={{ width: 474, fontSize: 13 }}>
              {card.approach_text}
            </Text>
          </React.Fragment>
        );
      });
    }
  };

  /**** Offer ****/
  const renderOffer = () => {
    // let selected = "premium";
    if (offerCards.length === 0) {
      return (
        <View style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
          <Text style={{ fontSize: 8, color: "#A6AAA9", fontWeight: 600 }}>
            1.0
          </Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 9 }}>
              Discovery: On-site facilitation (2-3 Days)
            </Text>
            <Text style={{ fontSize: 9 }}>Overview</Text>
            <Text
              style={{
                width: 412,
                marginTop: 4,
                fontSize: 8,
                color: "#707070",
              }}
            >
              Oh, how I wish I could believe or understand that!There's only one
              reasonable course of action now:kill Flexo! Yes, except the Dave
              Matthews Banddoesn't rock. Kif might! If rubbin' frozen dirt in
              yourcrotch is wrong, hey I don't wanna be right.
            </Text>
          </View>
        </View>
      );
    } else {
      // const filteredArray = offerCards.filter(
      //   (card) =>
      //     card.offerPlan[selected] === true ||
      //     card.offerPlan.recomandat === true ||
      //     card.offerPlan.standard === true
      // );

      switch (selectedOption) {
        case "standard":
          return offerCards
            .filter((card) => card.offerPlan[selectedOption] === true)
            .map((card, index) => {
              let keys = Object.keys(card.offerPlan);
              console.log("card", card);

              return (
                <React.Fragment key={card.key}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 16,
                    }}
                  >
                    <Text
                      style={{ fontSize: 8, color: "#A6AAA9", fontWeight: 600 }}
                    >
                      {card.textCard.textId}
                    </Text>
                    <View style={{ marginLeft: 15 }}>
                      <Text style={{ fontSize: 9 }}>{card.textCard.title}</Text>
                      <Text style={{ fontSize: 9 }}>
                        {card.textCard.secondaryTitle}
                      </Text>
                      <Text
                        style={{
                          width: 412,
                          marginTop: 4,
                          fontSize: 8,
                          color: "#707070",
                        }}
                      >
                        {card.textCard.text}
                      </Text>
                    </View>
                  </View>
                </React.Fragment>
              );
            });
        default:
          return offerCards
            .filter(
              (card) =>
                card.offerPlan[selectedOption] === true ||
                card.offerPlan.recomandat === true ||
                card.offerPlan.standard === true
            )
            .map((card, index) => {
              let keys = Object.keys(card.offerPlan);
              console.log("card", card);

              return (
                <React.Fragment key={card.key}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 16,
                    }}
                  >
                    <Text
                      style={{ fontSize: 8, color: "#A6AAA9", fontWeight: 600 }}
                    >
                      {card.textCard.textId}
                    </Text>
                    <View style={{ marginLeft: 15 }}>
                      <Text style={{ fontSize: 9 }}>{card.textCard.title}</Text>
                      <Text style={{ fontSize: 9 }}>
                        {card.textCard.secondaryTitle}
                      </Text>
                      <Text
                        style={{
                          width: 412,
                          marginTop: 4,
                          fontSize: 8,
                          color: "#707070",
                        }}
                      >
                        {card.textCard.text}
                      </Text>
                    </View>
                  </View>
                </React.Fragment>
              );
            });
      }
    }
  };

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page} wrap={false}>
        <View style={styles.cover} wrap={false}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 8 }}>{date()}</Text>
          </View>
          {/****  Add client Name ****/}
          <Text style={styles.clientName}>
            {props.clientName ? props.clientName : "Nume Client"}
          </Text>
          {/****  Add project Title ****/}
          <Text style={styles.projectTitle}>
            {props.projectTitle ? props.projectTitle : "Titlu Proiect"}
          </Text>
          <View style={{ marginTop: 120 }} />
          <Text style={styles.decorationLine} />
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.senderName}>
                {firstName && surname
                  ? `${firstName + " " + surname}`
                  : "Nume Ofertant"}
              </Text>
              <Text style={styles.jobTitle}>
                {jobTitle || ` ${"Titlu Job"}`}
              </Text>
            </View>
            <View style={{ marginLeft: 180 }}>
              <Text style={styles.address}> {address || ` ${"Adresa"}`}</Text>
              <Text style={styles.webAddress}>
                {webAddress || ` ${"www.adresa-web.com"}`}
              </Text>
            </View>
          </View>
        </View>
      </Page>
      <Page
        size="A4"
        orientation="landscape"
        style={{
          display: "flex",
          // alignContent: "center",
          justifyContent: "center",
        }}
        wrap={false}
      >
        <Text
          style={{
            // margin: 240,
            textAlign: "center",

            // alignSelf: "center",
            fontSize: 32,
          }}
        >
          TAG LINE
        </Text>
        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.cover} wrap={false}>
        <Text style={styles.decorationLine} />
        <Text
          style={{
            marginTop: 26,
            textAlign: "left",

            fontSize: 32,
          }}
        >
          Despre Noi
        </Text>

        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>

      <Page size="A4" orientation="landscape" style={styles.cover} wrap={false}>
        <Text
          style={{
            textAlign: "left",

            fontSize: 6,
          }}
        >
          Despre noi
        </Text>
        <View style={{ marginTop: 248 }} />
        <Text style={{ fontSize: 18, marginLeft: 18 }}>Istoria noastra</Text>
        <View style={{ marginTop: 18 }} />
        <Text style={styles.decorationLineMedium} />
        <View
          style={{
            width: 298,
            flexGrow: 1,

            padding: 5,
            position: "absolute",
            top: 190,
            left: 424,
          }}
          fixed
        >
          {renderAboutUsText()}
        </View>
        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.cover} wrap={false}>
        <Text style={styles.decorationLine} />
        <Text
          style={{
            marginTop: 26,
            textAlign: "left",

            fontSize: 32,
          }}
        >
          Capabilitati si servicii
        </Text>

        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.cover} wrap={false}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 6,
          }}
        >
          Cu ce ne ocupam
        </Text>
        <View style={{ marginTop: 40 }} />
        <Text style={{ fontSize: 21 }}>Capabilitati si Servicii</Text>
        <View style={{ marginTop: 24 }} />

        {renderBrandingDeclaration()}

        <View style={{ marginTop: 40 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <Text style={styles.decorationLineSmall} />
          <View style={{ marginTop: 17 }} />
          <View>{renderServices()}</View>
        </View>

        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.cover} wrap={false}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 6,
          }}
        >
          Cu ce ne ocupam
        </Text>
        <View style={{ marginTop: 40 }} />
        <Text style={{ fontSize: 21 }}>Abordarea noastra</Text>
        <View style={{ marginTop: 24 }} />
        {renderOurApproach()}

        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.cover} wrap={false}>
        <Text style={{ fontSize: 21 }}>Oferta</Text>
        <View style={{ marginTop: 24 }} />
        {renderOffer()}

        <View style={{ marginTop: 12, width: 554, textAlign: "right" }}>
          <Text style={{ fontSize: 12 }}>50.000 </Text>
          <Text style={{ width: 554, height: 3, backgroundColor: "#E2E2E2" }} />
        </View>

        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
      <Page
        size="A4"
        orientation="landscape"
        style={{
          display: "flex",
          // alignContent: "center",
          justifyContent: "center",
        }}
        wrap={false}
      >
        <Text
          style={{
            // margin: 240,
            textAlign: "center",

            // alignSelf: "center",
            fontSize: 32,
          }}
        >
          Multumesc.
        </Text>
        <Text style={styles.cornerPageLogo} fixed>
          LOGO
        </Text>
      </Page>
    </Document>
  );
};
