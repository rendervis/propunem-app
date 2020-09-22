import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";

///////UI
///////UI

import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";

const PersonalInformation = () => (
  <React.Fragment>
    <PageTitle>Date personale</PageTitle>
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
        <AccountField marginRight="128px" name="prenume" label="Prenume" />
        <AccountField name="nume" label="Nume" />
      </div>
      <div style={{ height: "64px" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AccountField marginRight="128px" name="adresa" label="Adresa" />
        <AccountField name="adresa" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AccountField marginRight="128px" name="oras" label="Oras" />
        <AccountField name="judet" label="Judet" />
      </div>
      <div style={{ height: "64px" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "32px",
        }}
      >
        <AccountField marginRight="128px" name="companie" label="Companie" />
        <AccountField name="titlu-job" label="Titlu Job" />
      </div>
      <BigButtonOutline inputHeight="32px">Salveaza</BigButtonOutline>
    </div>
  </React.Fragment>
);

export default PersonalInformation;
