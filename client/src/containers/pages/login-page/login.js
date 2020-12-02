import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
// import history from "../../../history";

///////components
import FormInput from "../../../components/form-input/form-input";
import CustomButton from "../../../components/custom-button/custom-button";
import GoogleAuth from "../../../components/GoogleAuth";
///////actions
import { login } from "../../../redux/actions/account";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // const loginHandler = () => {
  //   const { email, password } = data;
  //   history.push("/profil/profil");

  //   dispatch(login({ email, password, history }));
  //   setData({ email: "", password: "" });
  // };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email, password } = data;

    // history.push("/profil/profil");
    dispatch(login({ email, password, history }));

    setData({ email: "", password: "" });
  };

  return (
    <LoginStyled>
      <GoogleAuth />
      <form onSubmit={onSubmitHandler}>
        <FormInput
          placeholder="Adresa e-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Parola"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Intra in cont</CustomButton>
      </form>
      <div
        style={{
          position: "relative",
          height: "17%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // justifyContent: "",
          paddingTop: "20px",
        }}
      >
        <p
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            display: "flex",
            color: "#002f34",
          }}
        >
          Ai uitat parola?
        </p>
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.li`
  /* align-content: center; */
  /* text-align: center; */
  /* justify-items:center' */
  justify-content: center;
`;

export default withRouter(Login);
