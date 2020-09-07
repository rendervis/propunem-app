import React from "react";

import EditableTextLine from "./editable-text-line";

import styled from "styled-components";

import { styled as styledMaterial } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";

const ProposalOptions = (props) => {
  const textareaRef = React.createRef();
  return (
    <div style={{ display: "flex" }}>
      <OptionContainer>
        <OptionTitle>Standard</OptionTitle>
        <div
          style={{
            margin: "34px 0 0 0",
            alignItems: "center",
            textAlign: "start",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <MyEuroIcon />
            <OptionPriceTag>
              <TextAreaStyled
                {...props}
                placeholder="1199"
                ref={textareaRef}
                rows="1"
                wrap="off"
                minLength="2"
                maxLength="4"
              >
                {props.children}
              </TextAreaStyled>
            </OptionPriceTag>
          </div>
        </div>
        <div
          style={{
            width: "222px",
            alignSelf: "left",
            marginTop: "34px",
            padding: "20px 6px 24px 14px",
            borderTop: "1px solid rgba(0, 0, 0, 0.12",
          }}
        >
          <div
            style={{
              letterSpacing: "0.3px",
              fontSize: "14px",
              fontWeight: "400",
              margin: "0 0 7px 0",
            }}
          >
            Include
          </div>
          <ul style={{ padding: "0 0 0 8px" }}>
            <EditableTextLine />
          </ul>
        </div>
      </OptionContainer>
      <OptionContainer>ProposalOptions</OptionContainer>
      <OptionContainer>ProposalOptions</OptionContainer>
    </div>
  );
};

const OptionContainer = styled.div`
  width: 264px;
  height: 467px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(242, 242, 242, 1);
  border-radius: 8px;
  box-shadow: 0 1px 4px -1px rgba(60, 64, 67, 0.3);
  margin-right: 30px;
  padding-top: 32px;
  padding: 20px 20px;
  /* background-color: red; */
`;

const OptionTitle = styled.h1`
  font-family: Arimo;
  font-style: bold;
  font-size: 18px;
  letter-spacing: 1.25px;
`;
const MyEuroIcon = styledMaterial(EuroIcon)({
  color: "#0277BD",
  height: 14,
  width: 14,
  fontStyle: "bold",
});

const OptionPriceTag = styled.div`
  width: 100%;
  font-family: Arimo;
  font-style: bold;
  font-size: 36px;
  letter-spacing: 1.25px;
`;
const TextAreaStyled = styled.textarea`
  width: 90px;
  height: auto;
  resize: none;
  text-overflow: clip;
  overflow: visible;
  background-color: rgba(242, 242, 242, 0.15);

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-style: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  color: inherit;
`;

export default ProposalOptions;
