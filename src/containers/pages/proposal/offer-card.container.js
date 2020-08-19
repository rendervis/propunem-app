import React, { Component } from "react";
import styled from "styled-components";

import axios from "../../../axios-config";

///// COMPONENTS /////

import CardContent from "./card-content";
///// UI elements /////
import {
  TextRegular,
  TextSmall,
  TextInput,
} from "../../../components/UI/ui-elements";

class OfferCard extends Component {
  state = {
    textCard: {
      id: 0,
      title: "",
      secondaryTitle: "",
      text: "",
    },
    savedCard: {
      content: {},
      plan: {},
    },
    defaultCard: {},

    deletedCard: {
      content: {},
      plan: {},
    },

    offerPlan: {
      standard: false,
      recomandat: false,
      premium: false,
    },

    smallText: ["standard", "recomandat", "premium"],

    pressedPlan: [],
  };

  // postDataHandler = () => {
  //   const post = {
  //     content: this.state.textCard.content,
  //   };
  //   const toJson = JSON.stringify(post);

  //   axios.post("/compose", toJson).then((response) => {
  //     console.log(response);
  //   });
  // };

  handleOfferPlan = (event) => {
    let text = event.target.textContent;

    const updatedOfferPlan = {
      ...this.state.offerPlan,
    };
    updatedOfferPlan[text] = !this.state.offerPlan[text];

    let updatedPressedPlan = this.state.pressedPlan;
    updatedPressedPlan[0] = text;

    this.setState({
      offerPlan: updatedOfferPlan,

      pressedPlan: updatedPressedPlan,
    });
  };

  onInputChangeTitle = (event) => {
    const newTitle = event.target.value;
    const updateTitle = this.state.textCard;
    updateTitle.title = newTitle;
    this.setState({
      textCard: updateTitle,
    });
  };
  onInputChangeSecondaryTitle = (event) => {
    const newSecondaryTitle = event.target.value;
    const updateSecondaryTitle = this.state.textCard;
    updateSecondaryTitle.secondaryTitle = newSecondaryTitle;
    this.setState({
      textCard: updateSecondaryTitle,
    });
  };
  onInputChangeContent = (event) => {
    const newContent = event.target.value;
    const updateContent = this.state.textCard;
    updateContent.content = newContent;
    this.setState({
      textCard: updateContent,
    });
  };
  onDeleteHandler = () => {
    this.props.onDelete(this.props.idx);
  };
  onSaveHandler = () => {
    const newCard = { ...this.state.savedCard };
    newCard.content = { ...this.state.textCard };
    newCard.content.id = (1.0 + this.props.id / 10).toFixed(1);
    newCard.idx = this.props.id;

    newCard.plan = { ...this.state.offerPlan };

    this.setState({
      savedCard: newCard,
    });
    this.props.onSave(newCard, this.props.id);
  };

  getText = (text) => {
    const updateCardText = { ...this.state.textCard };
    updateCardText.text = text;
    this.setState({
      textCard: updateCardText,
    });
  };

  render() {
    const { title, secondaryTitle } = this.state.textCard;

    return (
      <TextContainer>
        <TextRegular bold style={{ fontSize: "18px", lineHeight: "22px" }}>
          {(1.0 + this.props.id / 10).toFixed(1)}
        </TextRegular>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            marginLeft: "36px",
            width: "836px",
            height: "auto",
          }}
        >
          {this.props.id === 0 ? (
            <TextInput
              titleStyle
              black
              type="text"
              placeholder="Adauga titlu"
              value={title}
              onChange={this.onInputChangeTitle}
            />
          ) : (
            ""
          )}

          <TextInput
            secondaryTitle
            black
            type="text"
            placeholder="Mica descriere (durata in ore)"
            value={secondaryTitle}
            onChange={this.onInputChangeSecondaryTitle}
          />

          <CardContent text={this.getText} />
          <div
            style={{
              display: "flex",
              flexFlow: "row-reverse ",
              textAlign: "right",
            }}
          >
            {this.state.savedCard.content.id >= 0 ? (
              <TextSmall
                onClick={this.props.onDelete}
                hovered
                red
                style={{ marginLeft: "34px" }}
              >
                sterge
              </TextSmall>
            ) : (
              ""
            )}

            <TextSmall
              hovered
              red
              style={{ marginLeft: "34px" }}
              onClick={this.onSaveHandler}
            >
              salveaza
            </TextSmall>

            {this.state.smallText.map((text, index) => (
              <TextSmall
                key={index}
                hovered
                style={{ marginLeft: "24px" }}
                onClick={this.handleOfferPlan}
                blue={this.state.offerPlan[text]}
              >
                {text}
              </TextSmall>
            ))}
          </div>
        </div>
      </TextContainer>
    );
  }
}

const TextContainer = styled.div`
  display: flex;
  height: auto;
  width: 890px;
`;

export default OfferCard;
