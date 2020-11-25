import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";

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

  /**not used */
  // const signupHandler = () => {
  //   const { email, password } = data;
  //   dispatch(signup({ email, password, history }));
  //   setData({ email: "", password: "" });
  //   // history.push("/profil/profil");
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email, password } = data;
    dispatch(signup({ email, password, history }));

    setData({ email: "", password: "" });
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
      <div>
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

          <CustomButton type="submit">Inregistreaza-te</CustomButton>
        </form>

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

// const Line = styled.div`
//   width: 330px;
//   height: 1px;
//   left: 0;

//   background: #c4c4c4;
// `;

const LoginStyled = styled.li``;

export default withRouter(Signup);
