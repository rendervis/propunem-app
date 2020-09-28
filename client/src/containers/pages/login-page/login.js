import React, { useState } from "react";
import styled, { css } from "styled-components";

///////components
import FormInput from "../../../components/form-input/form-input";
import CustomButton from "../../../components/custom-button/custom-button";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ email: "", password: "" });

    fetch("http://localhost:8080/inregistrare/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then((response) => response.json());
  };

  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
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
      </form>
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

export default Login;
