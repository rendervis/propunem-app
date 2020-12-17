import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import EditableTextLine from "./editable-text-line";

import styled from "styled-components";
import { styled as styledMaterial } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";
import AddBoxIcon from "@material-ui/icons/AddBox";

import {
  createOptionCard,
  saveOptionCardText,
  saveOptionCard,
  updateOptionCard,
  showDefaultOption,
  deleteOptionCardText,
} from "../../../redux/actions/optionCard";

const OptionContainer = (props) => {
  const dispatch = useDispatch();
  console.log({ props });
  const { proposalOptionName, title, priceTag, content } = props;

  const proposalId = useSelector((state) => state.proposal.proposalId);
  const [newPriceTag, setNewPriceTag] = useState(priceTag);
  console.log({ priceTag });
  console.log({ newPriceTag });
  const [newTextLine, setNewTextLine] = useState({
    textId: `${1}`,
    text: "",
    clicked: false,
    saved: false,
    key: null,
  });
  const [createOptionData, setCreateOptionData] = useState({
    title,
    priceTag: newPriceTag,
    content: {
      ...newTextLine,
      clicked: newTextLine.clicked,
    },
  });
  const option = useSelector((state) => state.optionCard.options[title]);
  const contentArray = Object.values(option.content);

  /**  if no content from DataBase create empty object */
  useEffect(() => {
    if (Object.keys(content).length === 0) {
      dispatch(
        createOptionCard({
          option: {
            ...createOptionData,
            content: {
              ...createOptionData.content,
              key: uuidv4(),
            },
          },
          proposalOptionName,
        })
      );
    }
  }, [content]);

  const onChangeHandler = (textLine) => {
    setNewTextLine(textLine);
  };

  /** handle text line click */
  const onClickHandler = (clicked, textLine) => {
    // inside click
    console.log("click inside", textLine.text);
    // console.log("click textLine", textLine);
    setCreateOptionData({
      title: proposalOptionName,
      priceTag: priceTag,
      content: {
        ...textLine,
        clicked,
      },
    });
  };

  const addDefaultHandler = (index) => {
    dispatch(
      showDefaultOption({
        defaultOption: {
          ...createOptionData,

          content: {
            textId: (2 + index).toString(),
            text: "",
            clicked: false,
            saved: false,
            key: uuidv4(),
          },
        },

        proposalOptionName,
      })
    );
  };

  const saveHandler = (index, key) => {
    if (
      (priceTag === null || priceTag.length === 0) &&
      newPriceTag.length === 0
    )
      return alert("nu ai completat pretul!");
    if (!newTextLine.text || newTextLine.text.replace(/ /g, "").length === 0)
      return alert("nu ai completat textul!");
    /** first save of the optionCard */
    if (Object.keys(content).length === 0) {
      return dispatch(
        saveOptionCard({
          savedOption: {
            title: proposalOptionName,
            priceTag: newPriceTag,
            content: {
              text: newTextLine.text,
              textId: (1 + index).toString(),
              saved: true,
              clicked: false,
              key,
            },
          },
          proposalOptionName,
          proposalId,
        })
      );
    }
    /** only save text */
    dispatch(
      saveOptionCardText({
        savedOption: {
          title: proposalOptionName,
          content: {
            text: newTextLine.text,
            textId: (1 + index).toString(),
            saved: true,
            clicked: false,
            key,
          },
        },
        proposalOptionName,
        proposalId,
      })
    );
  };
  const updateHandler = (textId, key) => {
    if (
      (priceTag === null || priceTag.length === 0) &&
      newPriceTag.length === 0
    )
      return alert("nu ai completat pretul!");
    if (!newTextLine.text || newTextLine.text.replace(/ /g, "").length === 0)
      return alert("nu ai completat textul!");
    dispatch(
      updateOptionCard({
        updatedCard: {
          title: proposalOptionName,
          priceTag: !newPriceTag ? priceTag : newPriceTag,
          content: {
            text: newTextLine.text,
            textId,
            saved: true,
            clicked: false,
            key,
          },
        },
        proposalOptionName,
        proposalId,
      })
    );
  };
  const onDeleteHandler = (textId) => {
    dispatch(
      deleteOptionCardText({ title, textId, proposalOptionName, proposalId })
    );
  };

  const actions = (index, text, textId, key) => {
    console.log(
      "createOptionData.content.text.length",
      createOptionData.content.text.length
    );
    return (
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        {!contentArray[index].text || contentArray.length > textId ? (
          ""
        ) : (
          <div
            onClick={() => addDefaultHandler(index)}
            style={{ alignItems: "center" }}
          >
            <MyAddBoxIcon style={{}} />
          </div>
        )}

        {/* show save || update only under the clicked text */}
        {createOptionData.content.clicked &&
        createOptionData.content.key === key ? (
          <p
            style={{
              cursor: "pointer",
              fontSize: "14px",
              padding: " 0 8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* check for text */}
            {text.replace(/ /g, "").length > 0 ? (
              <React.Fragment>
                <span
                  onClick={() => updateHandler(textId, key)}
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  UPDATE
                </span>
                <DeleteStyled
                  display={Object.keys(contentArray).length === 1 ? "none" : ""}
                  onClick={() => onDeleteHandler(textId)}
                >
                  DELETE
                </DeleteStyled>
              </React.Fragment>
            ) : (
              <span onClick={() => saveHandler(index, key)}> SAVE</span>
            )}
          </p>
        ) : (
          ""
        )}
      </div>
    );
  };
  const renderTextLineStandard = () => {
    if (!contentArray[0]) {
      return null;
    } else {
      return contentArray.map((item, index) => {
        return (
          <div key={item.key.toString()}>
            <EditableTextLine
              lineKey={item.key}
              textId={item.textId}
              text={item.text}
              onChange={(textLine) => onChangeHandler(textLine)}
              onClick={(clicked, textLine) => onClickHandler(clicked, textLine)}
            />
            {actions(index, item.text, item.textId, item.key)}
          </div>
        );
      });
    }
  };

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
          <MyEuroIcon />
          <OptionPriceTag>
            <TextAreaStyled
              {...props}
              placeholder="1199"
              onChange={(e) => setNewPriceTag(e.target.value)}
              onClick={() =>
                setCreateOptionData({
                  ...createOptionData,
                  content: {
                    ...createOptionData.content,
                    clicked: !createOptionData.content.clicked,
                  },
                })
              }
              defaultValue={priceTag}
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

const DeleteStyled = styled.span`
  display: ${(props) => (props.display ? props.display : "true")};
  padding: 0 8px;
`;

export default OptionContainer;
