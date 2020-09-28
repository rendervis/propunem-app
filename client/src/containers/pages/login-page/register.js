import React, { useState } from "react";
import styled, { css } from "styled-components";

///////components
import FormInput from "../../../components/form-input/form-input";
import CustomButton from "../../../components/custom-button/custom-button";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ email: "", password: "" });

    fetch("http://localhost:8080/inregistrare/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then((response) => response.json());
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
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

        <CustomButton type="submit">Inregistreaza-te</CustomButton>

        <div
          style={{
            position: "relative",
            height: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        ></div>
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

export default Register;
