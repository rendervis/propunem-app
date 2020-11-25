import React from "react";
import { reduxForm, getFormValues, isValid } from "redux-form";
import { useDispatch, connect } from "react-redux";

////COMPONENTS////

import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";

///////UI
import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";
///////ACTIONS
import { updateEmail } from "../../../redux/actions/account";

let Email = (props) => {
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email } = props.formValues;
    console.log("[formValues]", email);
    dispatch(updateEmail({ email }));
  };
  return (
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
        <form onSubmit={onSubmitHandler}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField
              marginRight="128px"
              name="email"
              type="email"
              label="Email"
            />
          </div>
          <div style={{ height: "34px" }}></div>

          <BigButtonOutline inputHeight="32px" type="submit">
            Salveaza
          </BigButtonOutline>
        </form>
      </div>
    </React.Fragment>
  );
};

Email = reduxForm({
  form: "accountField", // a unique identifier for this form
  // validate: validateMyField,
})(Email);

export default connect((state, props) => ({
  formValues: getFormValues("accountField")(state),
  valid: isValid("accountField")(state),

  // initialValues: { ...state.userInformation.userLocal },
  // dirty: isDirty('myForm')(state),
  // pristine: isPristine('myForm')(state),
  // invalid: isInvalid('myForm')(state)
}))(Email);
