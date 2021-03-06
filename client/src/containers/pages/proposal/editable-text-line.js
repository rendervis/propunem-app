import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { styled as styledMaterial } from "@material-ui/core/styles";

import CheckIcon from "@material-ui/icons/Check";

const EditableTextLine = (props) => {
  const node = useRef(null);
  console.log({ props });
  const [textLine, setTextLine] = useState({
    id: props.textId,
    key: props.lineKey,
    text: props.text,
    clicked: false,
    saved: false,
  });
  const [clicked, setClicked] = useState(false);

  /** if clicked outside change clicked state to false */
  useEffect(() => {
    const handler = (event) => {
      if (!node.current.contains(event.target)) {
        setClicked(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  useEffect(() => {
    props.onChange(textLine);
    props.onClick(clicked, textLine);
  }, [textLine, clicked]);

  const onInputChangeContent = (event) => {
    setTextLine({
      ...textLine,
      text: event.target.value,
      clicked: true,
    });
  };
  const onInputClicked = () => {
    setClicked(true);
  };
  console.log({ clicked });
  return (
    <div style={{ cursor: "pointer" }} ref={node}>
      <li
        // onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          textAlign: "start",
          alignItems: "start",
        }}
      >
        {!props.saved ? "" : <MyCheckIcon />}
        <span
          style={{
            padding: "6px 0 6px 12px",
            textAlign: "start",
            fontSize: "14px",
          }}
        >
          <TextAreaStyled
            {...props}
            wrap="off"
            placeholder="Spațiu de stocare: 15 GB"
            rows="1"
            minLength="5"
            maxLength="26"
            onChange={onInputChangeContent}
            onClick={() => onInputClicked()}
            defaultValue={props.text}
          />
        </span>
      </li>
    </div>
  );
};

const MyCheckIcon = styledMaterial(CheckIcon)({
  color: "#0277BD",
  height: 16,
  width: 16,
  margin: "4px 0",
  fontStyle: "normal",
});

const TextAreaStyled = styled.textarea`
  width: 178px;
  height: auto;
  resize: none;
  text-overflow: clip;

  overflow: visible;
  background-color: rgba(242, 242, 242, 0.3);

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

export default EditableTextLine;
