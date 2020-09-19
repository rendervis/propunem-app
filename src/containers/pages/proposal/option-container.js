import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import EditableTextLine from "./editable-text-line";

import styled from "styled-components";

import { styled as styledMaterial } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";
import AddBoxIcon from "@material-ui/icons/AddBox";

import {
  showOption,
  createOption,
  deleteOption,
  showDefaultOption,
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

const OptionContainer = (props) => {
  const dispatch = useDispatch();
  const { title } = props;
  const [newTitle, setNewTitle] = useState("");
  const [newPriceTag, setNewPriceTag] = useState("");
  const [newTextLine, setNewTextLine] = useState({
    id: `${1}`,
    text: "",
    clicked: false,
    saved: false,
  });
  const [createOptionData, setCreateOptionData] = useState({
    title: newTitle,
    priceTag: newPriceTag,
    content: newTextLine,
  });

  const proposalOption = useSelector(
    (state) => state.proposalOptions.options[title]
  );
  const contentArray = Object.values(proposalOption.content);

  useEffect(() => {
    if (title) {
      setNewTitle(title);
    }
    dispatch(showOption(proposalOption, title));
  }, []);

  useEffect(() => {
    dispatch(createOption(createOptionData, title));
  }, [createOptionData, newTextLine]);

  const onChangeHandler = (textLine) => {
    setNewTextLine(textLine);

    // console.log(
    //   "[onChangeHandler = (textLine) => ]",
    //   newTextLine,
    //   createOption.content
    // );
  };

  const onClickHandler = (index) => {
    setCreateOptionData({
      title: newTitle,
      priceTag: newPriceTag,
      content: {
        id: contentArray[index].id,
        text: contentArray[index].text,
        saved: false,
        clicked: true,
      },
    });
  };

  const addDefaultHandler = (index) => {
    dispatch(
      showDefaultOption(
        {
          ...createOptionData,

          content: {
            id: (2 + index).toString(),
            text: "",
            clicked: false,
            saved: false,
          },
        },
        title
      )
    );
  };
  const saveHandler = (index) => {
    setCreateOptionData({
      title: newTitle,
      priceTag: newPriceTag,
      content: {
        text: newTextLine.text,
        id: (1 + index).toString(),
        saved: true,
        clicked: false,
      },
    });
  };
  const onDeleteHandler = (id) => {
    dispatch(deleteOption(id, title));
  };

  const actions = (index, id) => {
    return (
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        {!contentArray[index].text || contentArray.length > id ? (
          ""
        ) : (
          <div
            onClick={() => addDefaultHandler(index)}
            style={{ alignItems: "center" }}
          >
            <MyAddBoxIcon style={{}} />
          </div>
        )}

        {contentArray[index].saved &&
        newTextLine.clicked &&
        createOption.priceTag ? (
          ""
        ) : (
          <p
            style={{ cursor: "pointer", fontSize: "14px", padding: " 0 8px" }}
            onClick={() => saveHandler(index)}
          >
            SAVE
          </p>
        )}
        {!contentArray[index].saved || contentArray.length === 1 ? (
          ""
        ) : (
          <p
            style={{ cursor: "pointer", fontSize: "14px", padding: " 0 8px" }}
            onClick={() => onDeleteHandler(id)}
          >
            DELETE
          </p>
        )}
      </div>
    );
  };
  const renderTextLineStandard = () => {
    if (!contentArray[0]) {
      return null;
    } else {
      return contentArray.map((item, index) => {
        // console.log("[const renderTextLineStandard = () =>]", item);
        return (
          <div key={random[item.id.toString()]}>
            <EditableTextLine
              clicked={item.clicked}
              id={index}
              onChange={(textLine) => onChangeHandler(textLine)}
              onClick={() => onClickHandler(index)}
            />
            {actions(index, item.id)}
          </div>
        );
      });
    }
  };
  return (
    <OptionContainerStyled>
      <OptionTitle>{props.title}</OptionTitle>
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
              onChange={(e) => setNewPriceTag(e.target.value)}
              onClick={() =>
                setCreateOptionData({ ...createOptionData, priceTag: "" })
              }
              rows="1"
              wrap="off"
              minLength="2"
              maxLength="4"
            />
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
    </OptionContainerStyled>
  );
};

const OptionContainerStyled = styled.div`
  width: 264px;
  min-height: 467px;
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

export default OptionContainer;
