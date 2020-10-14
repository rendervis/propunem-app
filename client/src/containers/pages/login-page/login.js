import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
// import history from "../../../history";

///////components
import FormInput from "../../../components/form-input/form-input";
import CustomButton from "../../../components/custom-button/custom-button";
///////actions
import { login } from "../../../redux/actions/account";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginHandler = () => {
    const { email, password } = data;
    history.push("/profil/profil");

    dispatch(login({ email, password }));
    setData({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setData({ email: "", password: "" });

  //   fetch("http://localhost:8080/account/login", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: data.email,
  //       password: data.password,
  //     }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => console.log("message", json.message));
  // };

  return (
    <LoginStyled>
      <div>
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

        <CustomButton onClick={loginHandler}>Intra in cont</CustomButton>

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
      </div>
    </LoginStyled>
  );
};

const Line = styled.div`
  width: 330px;
  height: 1px;
  left: 0;

  background: #c4c4c4;
`;

const LoginStyled = styled.li``;

export default withRouter(Login);
