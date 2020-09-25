import React from "react";

import styled from "styled-components";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <Group>
      <InputStyled onChange={handleChange} {...props} />

      {label ? (
        <LabelStyled
          className={`${props.value.length ? "shrink" : " "} form-input-label`}
        >
          {label}
        </LabelStyled>
      ) : null}
    </Group>
  );
};

const Group = styled.div`
  margin-right: ${(props) => props.marginRight || "0"};
  width: 304px;
  float: left;
  display: block;
  font-size: 15px;
  line-height: 1.6em;
  color: #161616;
`;
const InputStyled = styled.input`
  height: 50px;
  width: 330px;
  padding: 4px 16px;

  background-color: #fff;
  border: 1px solid #777;
  border-radius: 6px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: border 0.2s linear, box-shadow 0.2s linear;

  display: inline-block;

  margin-bottom: 9px;
  font-size: 15px;
  line-height: 1.6em;
  color: #333;
`;

const LabelStyled = styled.label`
  min-height: 23px;
  margin-bottom: 10px;
  font-size: 14px;
  display: block;

  font-weight: 400;
  line-height: 1.6em;
  cursor: default;
  -webkit-font-smoothing: antialiased;
`;

export default FormInput;
