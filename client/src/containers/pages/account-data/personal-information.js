import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, connect, useSelector } from "react-redux";
import { reduxForm, getFormValues, isValid } from "redux-form";

import styled from "styled-components";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";

///////UI
///////actions
import {
  saveUserAccountInfo,
  dataToForm,
} from "../../../redux/actions/userAccount";

import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";

let PersonalInformation = (props) => {
  const [userLocal, setUserLocal] = useState({
    firstName: "",
    surname: "",
    address: "",
    addressExtra: "",
    city: "",
    county: "",
    companyName: "",
    jobTitle: "",
  });

  const dispatch = useDispatch();
  const accountId = useSelector((state) => state.account.accountId);
  let userDb = useSelector((state) => state.userInformation.userInformation);

  useEffect(() => {
    setUserLocal({
      ...userDb,
    });
  }, [userDb]);

  useEffect(() => {
    props.load({ userLocal });
    console.log("[props.load -->>]", userLocal);
  }, [userDb, userLocal]);

  //////not used
  const onInputChangeHandler = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setUserLocal({
      ...userLocal,
      [name]: value,
    });
  };

  // console.log("[const PersonalInformation : userDb]", userDb);
  // console.log("[const PersonalInformation : userLocal]", userLocal);
  // console.log("[const PersonalInformation : valid]", props.valid);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("[formValues]", props.formValues);
    if (props.valid) {
      dispatch(
        saveUserAccountInfo({
          accountId,
          userInformation: { ...props.formValues },
        })
      );
      alert("multumesc");
    } else {
      alert("completeaza datele");
    }
  };
  const { surname, firstName } = props;
  return (
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
        <form onSubmit={onSubmitHandler}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField
              label="Prenume"
              name="firstName"
              marginRight="128px"
            />
            <AccountField name="surname" label="Nume" />
          </div>
          <div style={{ height: "64px" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField name="address" label="Adresa" marginRight="128px" />
            <AccountField name="addressExtra" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField name="city" label="Oras" marginRight="128px" />
            <AccountField name="county" label="Judet" />
          </div>
          <div style={{ height: "64px" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "32px",
            }}
          >
            <AccountField
              name="companyName"
              label="Companie"
              marginRight="128px"
            />
            <AccountField name="jobTitle" label="Titlu Job" />
          </div>
          <BigButtonOutline
            isDisabled={!props.valid}
            inputHeight="32px"
            type="submit"
          >
            Salveaza
          </BigButtonOutline>
        </form>
      </div>
    </React.Fragment>
  );
};

///////get redux-form values from state
///////get validate rules
const validateMyField = (formValues) => {
  console.log("[const validate: formValues]", formValues);
  const { firstName, surname, companyName, jobTitle } = formValues;
  const errors = {};

  if (!firstName) {
    errors.firstName = "Trebuie sa introduci prenume!";
  }
  if (!surname) {
    errors.surname = "Trebuie sa introduci nume!";
  }
  if (!companyName) {
    errors.companyName = "Trebuie sa introduci companie!";
  }
  if (!jobTitle) {
    errors.jobTitle = "Trebuie sa introduci job!";
  }
  return errors;
};

PersonalInformation = reduxForm({
  form: "accountField", // a unique identifier for this form
  validate: validateMyField,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(PersonalInformation);

export default connect(
  (state, props) => ({
    formValues: getFormValues("accountField")(state),
    valid: isValid("accountField")(state),
    initialValues: { ...state.userInformation.userLocal },

    // dirty: isDirty('myForm')(state),
    // pristine: isPristine('myForm')(state),
    // invalid: isInvalid('myForm')(state)
  }),
  { load: dataToForm }
)(PersonalInformation);
