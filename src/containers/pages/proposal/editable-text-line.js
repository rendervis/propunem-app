import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { styled as styledMaterial } from "@material-ui/core/styles";

import CheckIcon from "@material-ui/icons/Check";

const EditableTextLine = (props) => {
  // const [newValue, setNewValue] = useState("");
  const [textLine, setTextLine] = useState({
    id: `${0}`,
    text: "",
    clicked: false,
    saved: false,
  });
  useEffect(() => {
    props.onChange(textLine);
  }, [textLine, props]);
  // console.log("[EditableTextLine = (props) =>]", textLine);
  // useEffect(() => {
  //   props.onClickOutside(textLine);
  // }, [textLine, props]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     console.log(textInput.current.contains(event.target));
  //     // console.log(textLineRef.current.contains(event.target));

  //     if (!textInput.current.contains(event.target) || false) {
  //       // alert("You clicked outside of me!");
  //       setTextLine({
  //         ...textLine,
  //         text: newValue,
  //         clicked: false,
  //       });
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // });

  // const onClickHandler = () => {
  //   setTextLine({
  //     ...textLine,
  //     clicked: true,
  //     saved: false,
  //   });

  //   console.log("[onClickHandler = (CLICKED) =>]", textInput.current);
  // };

  const onInputChangeContent = (event) => {
    // setNewValue(event.target.value);
    setTextLine({
      ...textLine,
      text: event.target.value,
      clicked: true,
    });

    // props.refHandler(textInput);
  };

  return (
    <div style={{ cursor: "pointer" }}>
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
