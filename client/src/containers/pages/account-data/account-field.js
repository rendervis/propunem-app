import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";

class AccountField extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header"> {meta.error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    // console.log(formProps.meta);
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <FieldContainer {...this.props} className={className}>
        <LabelStyled>{formProps.label}</LabelStyled>
        <div>
          <InputStyled
            {...formProps.input}
            type={this.props.type}
            autoComplete="off"
          />
        </div>
        {this.renderError(formProps.meta)}
      </FieldContainer>
    );
  };

  render() {
    // console.log(this.props);
    return (
      <Field
        label={this.props.label}
        name={this.props.name}
        component={this.renderInput}
      />
    );
  }
}

const validate = (formValues) => {
  // console.log(formValues);
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title!";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }

  return errors;
};

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

export default reduxForm({
  form: "accountField",
  validate: validate,
})(AccountField);
