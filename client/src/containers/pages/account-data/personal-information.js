import React, { useState, useEffect } from "react";

import { useDispatch, connect, useSelector } from "react-redux";
import { reduxForm, getFormValues, isValid } from "redux-form";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";

///////UI
///////actions
import {
  saveUserAccountInfo,
  dataToForm,
  fetchUserAccountInfo,
  updateUserAccount,
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
    telephone: "",
    webAddress: "",
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
  useEffect(() => {
    dispatch(fetchUserAccountInfo({ accountId }));
  }, [dispatch, accountId]);

  //////not used
  // const onInputChangeHandler = (event) => {
  //   event.preventDefault();
  //   const { value, name } = event.target;
  //   setUserLocal({
  //     ...userLocal,
  //     [name]: value,
  //   });
  // };

  // console.log("[const PersonalInformation : userDb]", userDb);
  // console.log("[const PersonalInformation : userLocal]", userLocal);
  // console.log("[const PersonalInformation : valid]", props.valid);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("[formValues]", props.formValues);
    if (props.valid && Object.keys(userDb).length === 0) {
      dispatch(
        saveUserAccountInfo({
          accountId,
          userInformation: { ...props.formValues },
        })
      );
      alert("multumesc");
    } else if (props.valid && Object.keys(userDb).length > 0) {
      dispatch(
        updateUserAccount({
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
          paddingTop: "3%",
          justifyContent: "flex-start",
          textAlign: "left",

          width: "45vw",
          // width: "864px",
          height: "73vh",
          // height: "791px",
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
              label="* Prenume"
              name="firstName"
              marginRight="15%"
            />
            <AccountField name="surname" label="* Nume" />
          </div>
          <div style={{ height: "7%" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField name="address" label="Adresa" marginRight="15%" />
            <AccountField name="addressExtra" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField name="city" label="Oras" marginRight="15%" />
            <AccountField name="county" label="Judet" />
          </div>
          <div style={{ height: "7%" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "3.5%",
            }}
          >
            <AccountField
              name="companyName"
              label="* Companie"
              marginRight="15%"
            />
            <AccountField name="jobTitle" label="* Titlu Job" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "3.5%",
            }}
          >
            <AccountField name="telephone" label="Telefon" marginRight="15%" />
            <AccountField name="webAddress" label="Adresa web" />
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
