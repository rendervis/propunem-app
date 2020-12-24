import React from "react";
import { withRouter, Switch, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { styled as styledMaterial } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";
import AddBoxIcon from "@material-ui/icons/AddBox";
///////components

const ModalOption = (props) => {
  // console.log("[props]", props);
  const { title, priceTag, content } = props.optionCard;
  let url = props.match.url;

  // const contentArray = Object.values(optionCard.content);
  // const renderTextLineStandard = () => {
  //   if (!contentArray[0]) {
  //     return null;
  //   } else {
  //     return contentArray.map((item, index) => {
  //       // console.log("[const renderTextLineStandard = () =>]", item);
  //       return (
  //         <div key={item.key.toString()}>
  //           <p>{item.text}</p>
  //         </div>
  //       );
  //     });
  //   }
  // };

  return (
    <OptionContainerStyled>
      <OptionTitle>{title}</OptionTitle>
      <div
        style={{
          margin: "34px 0 0 0",
          alignItems: "center",
          textAlign: "start",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <NavLink to={`${url}/${title}`}>
            <MyEuroIcon />
            <OptionPriceTag>{priceTag}</OptionPriceTag>
          </NavLink>
        </div>
      </div>
      <div
        style={{
          width: "222px",
          alignSelf: "left",
          marginTop: "34px",
          padding: "20px 6px 24px 14px",
          borderTop: "1px solid rgba(0, 0, 0, 0.12",

          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {Object.values(content).map(({ text }, index) => {
          return (
            <React.Fragment key={index}>
              <ul style={{ padding: "0 0 0 8px" }}>{text}</ul>
            </React.Fragment>
          );
        })}
      </div>
    </OptionContainerStyled>
  );
};

const OptionContainerStyled = styled.div`
  width: 264px;
  /* min-height: 467px; */
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(242, 242, 242, 1);
  border-radius: 8px;
  box-shadow: 0 1px 4px -1px rgba(60, 64, 67, 0.3);
  margin-right: 30px;
  padding-top: 32px;
  padding: 20px 20px;
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
const MyAddBoxIcon = styledMaterial(AddBoxIcon)({
  color: "#0277BD",
  cursor: "pointer",
  margin: 0,
  height: "14px",
  width: "14px",
  fontSize: 0,
  display: "flex",
  "&:hover": {
    width: "24px",
    height: "24px",
  },
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

export default withRouter(ModalOption);
