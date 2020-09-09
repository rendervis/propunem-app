import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { styled as styledMaterial } from "@material-ui/core/styles";

import CheckIcon from "@material-ui/icons/Check";

const EditableTextLine = (props) => {
  const dispatch = useDispatch();

  const textLineRef = React.createRef();
  const [newValue, setNewValue] = useState("");
  const [textLine, setTextLine] = useState({
    id: `${0}`,
    text: newValue,
    clicked: false,
    saved: false,
  });
  // console.log("[EditableTextLine = (props) =>]", textLine);
  useEffect(() => {
    props.onClickOutside(textLine);
  }, [textLine, props]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (textLineRef && !textLineRef.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setTextLine({
          ...textLine,
          text: newValue,
          clicked: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const onClickHandler = () => {
    setTextLine({
      ...textLine,
      clicked: true,
      saved: false,
    });

    // console.log("[onClickHandler = () =>]", textLine);
  };

  const onInputChangeContent = (event) => {
    setNewValue(event.target.value);
    // this.props.onChange(event.target.value);
  };

  return (
    <div onClick={onClickHandler} style={{ cursor: "pointer" }}>
      <li
        ref={textLineRef}
        style={{
          display: "flex",
          textAlign: "start",
          alignItems: "start",
        }}
      >
        {textLine.clicked ? "" : <MyCheckIcon />}
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
