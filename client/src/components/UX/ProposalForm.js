import React, { useState } from "react";
import { withRouter } from "react-router-dom";

///////UX
import OverlayBackground from "./overlay-background";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import styled from "styled-components";

const ProposalForm = ({ history, ...props }) => {
  const [selected, setSelected] = React.useState("standard");
  // console.log("props", props);
  let [fields, setFields] = useState({});

  const handleChange = (event) => {
    const values = { ...fields };
    const { name, value } = event.target;
    values[name] = value;
    setFields(values);
  };
  const handleToggled = (event, newToggle) => {
    setSelected(newToggle);
  };
  const onClickHandler = () => {
    // console.log("selected", selected);
    props.onContinue({ fields, selected });
  };

  ///////build a placeHolder list to add more inputs to ProposalForm
  const placeholderList = [];
  let keysList = Object.keys(props);
  keysList.find((string) => {
    if (string.includes("placeholder")) placeholderList.push(string);
  });
  //////for multiple inputs on the form add placeholder, placeholder2, placeholder3 ...etc

  // console.log("fields", fields);

  return (
    <OverlayBackground blur onClick={() => history.goBack()}>
      <Container>
        {props.loading ? <CircularProgress /> : ""}

        <Title>{props.title}</Title>
        <div style={{ height: "64px" }} />
        <FadedLine>{props.fadedLine}</FadedLine>
        <div style={{ height: "12px" }} />
        <SecondaryTitle>{props.secondaryTitle}</SecondaryTitle>
        <div style={{ height: "40px" }} />
        {placeholderList.map((string) => {
          //Input name = value from placeholder
          let name = props[string]
            .toLowerCase()
            .replace(/\s+/, "_")
            .replace("-", "_");

          return (
            <InputStyled
              placeholder={props[string]}
              name={name}
              type="text"
              value={fields[name]}
              onChange={handleChange}
              required
            />
          );
        })}
        <div style={{ height: "40px" }} />
        {props.showToggleGroup ? (
          <div style={{ marginBottom: "25px" }}>
            <ToggleButtonGroup
              value={selected}
              exclusive
              onChange={handleToggled}
            >
              <ToggleButton value="standard">
                <span>STANDARD</span>
              </ToggleButton>
              <ToggleButton value="recomandat">
                <span>RECOMANDAT</span>
              </ToggleButton>
              <ToggleButton value="premium">
                <span>PREMIUM</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        ) : (
          ""
        )}
        <YellowButtonStyled onClick={onClickHandler}>
          CONTINUA
        </YellowButtonStyled>
        <div style={{ height: "24px" }} />
        <CancelText onClick={() => history.goBack()}>nu multumesc</CancelText>
      </Container>
    </OverlayBackground>
  );
};

const Container = styled.div`
  width: 820px;
  height: 530px;
  border-radius: 12px;
  background-color: #fafafa;
  padding: 66px 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  /* font-family: Helvetica; */
  font-size: 34px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #040404;
`;

const FadedLine = styled.p`
  width: 241px;
  height: 19px;
  /* font-family: Helvetica; */
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.55px;
  text-align: left;
  color: #a0a0a0;

  /* margin-top: 64px; */
  /* margin-bottom: 12px; */
`;

const SecondaryTitle = styled.p`
  /* font-family: Helvetica; */
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: 0.65px;
  text-align: left;
  color: #040404;
`;

const InputStyled = styled.input`
  width: 543px;
  height: 47px;

  background-color: #ffffff;
  border: solid 1px #e2e2e2;
  /* background-color: #fff;
  border: 1px solid #777; */

  padding: 4px 16px;
  border-radius: 3px;

  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: border 0.2s linear, box-shadow 0.2s linear;

  display: inline-block;

  margin-bottom: 9px;
  font-size: 15px;
  line-height: 1.6em;
  color: #333;
`;

const YellowButtonStyled = styled.button`
  width: 219px;
  height: 55px;
  border: solid 1px #d8c37f;
  border-radius: 18px;
  background-color: #ffce0f;

  /* font-family: Arial; */
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #786104;

  /* border: none; */
  box-sizing: 0;
  /* background-color: #ec5252; */
  /* color: white; */

  display: flex;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 120px;
  /* margin: 0 5px; */
  padding: 0 35px 0 35px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  }
`;

const CancelText = styled.div`
  /* font-family: Arial; */
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #0277bd;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #0265a1;
  }
`;

export default withRouter(ProposalForm);
