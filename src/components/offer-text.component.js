import React from "react";
import styled from "styled-components";

///// UI elements /////
import { TextRegular, TextSmall } from "../components/UI/ui-elements";

const OfferText = (props) => {
  const { id, title, secondaryTitle, content } = props;

  return (
    <TextContainer>
      <TextRegular bold style={{ fontSize: "18px", lineHeight: "22px" }}>
        {id.toFixed(1)}
      </TextRegular>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          marginLeft: "36px",
        }}
      >
        <TextRegular titleStyle displayNone={!title}>
          {title}
        </TextRegular>
        <TextRegular secondaryTitle>{secondaryTitle}</TextRegular>
        <div>{content}</div>
        <div
          style={{
            display: "flex",
            flexFlow: "row-reverse ",
            textAlign: "right",
          }}
        >
          <TextSmall blue style={{ marginLeft: "56px" }}>
            sterge
          </TextSmall>

          <TextSmall
            blue
            style={{ marginLeft: "56px" }}
            onClick={props.handleSave}
          >
            salveaza
          </TextSmall>
        </div>
      </div>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  height: auto;
  width: 890px;
  display: flex;
`;

export default OfferText;
