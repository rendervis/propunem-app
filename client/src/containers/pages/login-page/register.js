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

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ [name]: value });
  };
  return (
    <LoginStyled>
      <FormInput
        placeholder="Adresa e-mail"
        name="email"
        type="email"
        value={data.email}
        handleChange={handleChange}
        required
      />

      <FormInput
        placeholder="Parola"
        name="password"
        type="password"
        value={data.password}
        handleChange={handleChange}
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
