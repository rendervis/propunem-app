import React, { Component } from "react";
import styled from "styled-components";

class AddText extends Component {
  // state = {
  //   content: "",
  // };

  // onChangeHandler = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     content: event.target.value,
  //   });
  //   // console.log(this.state.content);
  // };

  // postDataHandler = () => {
  //   const post = {
  //     content: this.state.content,
  //   };
  //   const toJson = JSON.stringify(post);

  //   axios.post("/compose", toJson).then((response) => {
  //     console.log(response);
  //   });
  //   console.log("[AddText]", toJson);
  // };

  render() {
    let areaHeight = this.props.updateHeight;
    if (areaHeight >= 150) {
      areaHeight = 150;
    }
    console.log("[class AddText]", areaHeight);
    return (
      <React.Fragment>
        <TextAreaStyled
          style={{ height: areaHeight + "px" }}
          value={this.props.textContent}
          onChange={this.props.handleChange}
          maxLength="300"
          rows="2"
        />
      </React.Fragment>
    );
  }
}

const TextAreaStyled = styled.textarea`
  /* min-height: 75px; */
  /* height: auto; */
  max-height: 150px;

  width: 920px;
  resize: none;
  background-color: #ccc;
  overflow: hidden;

  font-family: Arimo;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  color: #6f6f6f;
  margin-bottom: 24px;
`;

export default AddText;
