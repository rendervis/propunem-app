import React from "react";
import { reduxForm, getFormValues, isValid } from "redux-form";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";

///////UI

import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";

let SetPassword = () => (
  <React.Fragment>
    <PageTitle>Seteaza parola</PageTitle>
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
        <AccountField marginRight="128px" name="parola" label="Parola" />
      </div>
      <div style={{ height: "34px" }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "32px",
        }}
      >
        <AccountField
          marginRight="128px"
          name="parola-repet"
          label="Parola(repeta)"
        />
      </div>
      <BigButtonOutline inputHeight="32px">Salveaza</BigButtonOutline>
    </div>
  </React.Fragment>
);

SetPassword = reduxForm({
  form: "accountField", // a unique identifier for this form
  // validate: validateMyField,
})(SetPassword);
export default SetPassword;
