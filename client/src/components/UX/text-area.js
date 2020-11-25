import React, { Component } from "react";
import styled from "styled-components";

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: "Adauga continut, acuma serios, scrie si tu ceva...",
      textHeight: null,
      text: this.props.text || "",
    };
    this.textareaRef = React.createRef();
  }

  onInputChangeContent = (event) => {
    let updateText = event.target.value;
    this.setState({
      text: updateText,
    });
    this.props.onChange(event.target.value);
  };
  autoGrow = () => {
    const { scrollHeight, clientHeight, style } = this.textareaRef.current;
    // console.log("this.textareaRef.current", this.textareaRef.current);
    if (scrollHeight > clientHeight) {
      style.height = scrollHeight + "px";
      this.setState({
        textHeight: style.height,
      });
    }
  };

  render() {
    // console.log("[TextArea extends ->this.props]", this.props.text);
    // console.log("[TextArea extends ->this.state]", this.state.text);
    // console.log("this.textareaRef.current", this.textareaRef.current);
    return (
      <TextAreaStyled
        {...this.props}
        ref={this.textareaRef}
        onKeyUp={this.autoGrow}
        placeholder={this.props.placeholder}
        onChange={this.onInputChangeContent}
        // rows="1"
        minLength="10"
        maxLength="200"
      />
    );
  }
}

const TextAreaStyled = styled.textarea`
  width: 740px;

  height: auto;
  resize: none;
  text-overflow: clip;
  overflow: hidden;

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

export default TextArea;
