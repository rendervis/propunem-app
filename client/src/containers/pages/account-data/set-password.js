import React from "react";
import { reduxForm, getFormValues, isValid, reset } from "redux-form";
import { useDispatch, connect } from "react-redux";

////COMPONENTS////
import PageTitle from "../../../components/UI/profile/page-title";
import AccountField from "./account-field";
///////UI
import { BigButtonOutline } from "../../../components/UI/big-button-outline.component";
///////ACTIONS
import { updatePassword } from "../../../redux/actions/account";

let SetPassword = (props) => {
  const dispatch = useDispatch();
  // const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { password } = props.formValues;
    console.log("[formValues]", password);
    if (props.valid) {
      dispatch(updatePassword({ password }));
      dispatch(reset("accountField"));
      alert("parola a fost schimbata!");
    } else {
      alert("parolele nu se potrivesc");
    }
  };

  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  return (
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
        {" "}
        <form onSubmit={onSubmitHandler}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AccountField
              marginRight="128px"
              name="password"
              type="password"
              label="Parola"
            />
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
              name="passwordRepeat"
              type="password"
              label="Parola(repeta)"
            />
          </div>
          <BigButtonOutline inputHeight="32px" type="submit">
            Salveaza
          </BigButtonOutline>
        </form>
      </div>
    </React.Fragment>
  );
};

const validateMyField = (formValues) => {
  console.log("[const validate: formValues]", formValues);
  const { password, passwordRepeat } = formValues;

  const errors = {};
  if (password) {
    password.length < 6
      ? (errors.password = `Parola trebuie sa fie de 6 caractere sau mai multe.`)
      : (errors.password = "");
  }

  if (password !== passwordRepeat) {
    errors.passwordRepeat = "Parolele nu se potrivesc!";
  }

  return errors;
};

SetPassword = reduxForm({
  form: "accountField", // a unique identifier for this form
  validate: validateMyField,
})(SetPassword);

export default connect((state, props) => ({
  formValues: getFormValues("accountField")(state),
  valid: isValid("accountField")(state),

  // initialValues: { ...state.userInformation.userLocal },
  // dirty: isDirty('myForm')(state),
  // pristine: isPristine('myForm')(state),
  // invalid: isInvalid('myForm')(state)
}))(SetPassword);
