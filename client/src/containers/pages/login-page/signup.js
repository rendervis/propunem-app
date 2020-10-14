import React, { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled, { css } from "styled-components";

///////components
import FormInput from "../../../components/form-input/form-input";
import CustomButton from "../../../components/custom-button/custom-button";
///////actions
import { signup } from "../../../redux/actions/account";

const Signup = ({ history }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const signupHandler = () => {
    const { email, password } = data;
    history.push("/profil/profil");

    dispatch(signup({ email, password }));

    setData({ email: "", password: "" });
  };

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // setData({ email: "", password: "" });

  // fetch("http://localhost:8080/account/signup", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     email: data.email,
  //     password: data.password,
  //   }),
  // }).then((response) => response.json());
  // };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

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

        <CustomButton type="button" onClick={signupHandler}>
          Inregistreaza-te
        </CustomButton>

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

export default withRouter(Signup);
