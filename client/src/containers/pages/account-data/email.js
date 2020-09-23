import React from "react";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";

///////UI

import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";

const Email = () => (
  <React.Fragment>
    <PageTitle>Adresa email</PageTitle>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        justifyContent: "flex-start",
        textAlign: "left",

        width: "864px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AccountField marginRight="128px" name="email" label="Email" />
      </div>
      <div style={{ height: "34px" }}></div>

      <BigButtonOutline inputHeight="32px">Salveaza</BigButtonOutline>
    </div>
  </React.Fragment>
);

export default Email;
