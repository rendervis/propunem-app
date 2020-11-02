import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";

class AccountField extends React.Component {
  renderError(meta) {
    if (meta.touched && (meta.error || meta.warning)) {
      return (
        <div className="ui error message">
          <div className="header"> {meta.error}</div>
          <div className="header"> {meta.warning}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    // console.log("[renderInput -->> input]", input);
    let { input, label, meta, type } = formProps;

    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <FieldContainer {...this.props} className={className}>
        <LabelStyled>{label}</LabelStyled>
        <li>
          <InputStyled {...input} type={type} />
        </li>
        {this.renderError(meta)}
      </FieldContainer>
    );
  };

  render() {
    console.log("[class AccountField: props]", this.props);
    return (
      <Field
        label={this.props.label}
        name={this.props.name}
        type={this.props.type}
        component={this.renderInput}
        placeholder={this.props.placeholder}
      />
    );
  }
}
const InputStyled = styled.input`
  height: 32px;
  width: 100%;
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

const FieldContainer = styled.div`
  margin-right: ${(props) => props.marginRight || "0"};
  width: 304px;
  float: left;
  display: block;
  font-size: 15px;
  line-height: 1.6em;
  color: #161616;
`;

export default AccountField;
