import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import EditableTextLine from "./editable-text-line";

import styled from "styled-components";

import { styled as styledMaterial } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";
import AddBoxIcon from "@material-ui/icons/AddBox";

import {
  showText,
  createText,
  deleteText,
  showDefault,
} from "../../../redux/actions/proposal-options.actions";

let random = [
  0x10,
  0x91,
  0x56,
  0xbe,
  0xc4,
  0xfb,
  0xc1,
  0xea,
  0x71,
  0xb4,
  0xef,
  0xe1,
  0x67,
  0x1c,
  0x58,
  0x36,
];

const ProposalOptions = (props) => {
  const textareaRef = React.createRef();
  const dispatch = useDispatch();
  const [newTextLine, setNewTextLine] = useState({
    id: `${1}`,
    text: "",
    clicked: false,
    saved: false,
  });
  const [createTextLine, setCreateTextLine] = useState(newTextLine);

  const proposalOptions = useSelector((state) => state.proposalOptions);
  const standard = Object.values(proposalOptions.standard);
  const recomandat = Object.values(proposalOptions.recomandat);
  const premium = Object.values(proposalOptions.premium);

  // console.log("[ ProposalOptions => standard :]", props);

  useEffect(() => {
    dispatch(showText(standard, "standard"));
    dispatch(showText(recomandat, "recomandat"));
    dispatch(showText(premium, "premium"));
  }, []);
  useEffect(() => {
    dispatch(createText(createTextLine, "standard"));
  }, [createTextLine]);

  const clickOutsideHandler = (textLine) => {
    // dispatch(createText(textLine, "standard"));
    setNewTextLine(textLine);
    // console.log("[clickOutsideHandler = (textLine) => ]", textLine);
  };

  const addDefaultHandler = (index) => {
    dispatch(
      showDefault(
        {
          id: (2 + index).toString(),
          text: "",
          clicked: false,
          saved: false,
        },
        "standard"
      )
    );
  };
  const saveHandler = (index) => {
    // dispatch(createText({ ...newTextLine, saved: true }, "standard"));
    setCreateTextLine({
      ...newTextLine,
      id: (1 + index).toString(),
      saved: true,
    });
  };
  const onDeleteHandler = (id) => {
    dispatch(deleteText(id, "standard"));
  };

  const actions = (index, id) => {
    return (
      <div>
        {!standard[index].text || !newTextLine.text || standard.length > id ? (
          ""
        ) : (
          <div
            onClick={() => addDefaultHandler(index)}
            style={{ display: "flex", alignItems: "flexEnd" }}
          >
            <MyAddBoxIcon style={{}} />
          </div>
        )}

        {!newTextLine.text ? (
          ""
        ) : (
          <p style={{ cursor: "pointer" }} onClick={() => saveHandler(index)}>
            SAVE
          </p>
        )}
        {!standard[index].text || !newTextLine.text || standard.length === 1 ? (
          ""
        ) : (
          <p style={{ cursor: "pointer" }} onClick={() => onDeleteHandler(id)}>
            DELETE
          </p>
        )}
      </div>
    );
  };
  const renderTextLineStandard = () => {
    if (!standard[0]) {
      return null;
    } else {
      return standard.map((item, index) => {
        // console.log("[renderTextLineStandard = () =>]", item);
        return (
          <div key={random[item.id].toString()}>
            <EditableTextLine
              id={index}
              onClickOutside={(textLine) => clickOutsideHandler(textLine)}
            />
            {actions(index, item.id)}
          </div>
        );
      });
    }
  };
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

            overflowY: "auto",
            overflowX: "hidden",
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
          <ul style={{ padding: "0 0 0 8px" }}>{renderTextLineStandard()}</ul>
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
const MyAddBoxIcon = styledMaterial(AddBoxIcon)({
  color: "#0277BD",
  cursor: "pointer",
  marginLeft: "auto",
  marginRight: 0,
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
