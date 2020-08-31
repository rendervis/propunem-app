import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import SavedOfferCard from "../../../models/savedOfferCard";

import styled from "styled-components";

///// COMPONENTS /////

import TextArea from "./text-area.";
///// UI elements /////
import {
  TextRegular,
  TextSmall,
  TextInput,
} from "../../../components/UI/ui-elements";

class OfferForm extends Component {
  state = {
    textCard: {
      title: "",
      secondaryTitle: "",
      text: "",
    },
    offerPlan: {
      standard: false,
      recomandat: false,
      premium: false,
    },
    smallText: ["standard", "recomandat", "premium"],
  };

  renderTitle = ({ input, title, meta: { visited, touched } }) => {
    return (
      <React.Fragment>
        <TextInput
          {...input}
          titleStyle
          black
          placeholder="Adauga titlu"
          value={title}
          onChange={this.onInputChangeTitle}
        />
      </React.Fragment>
    );
  };
  renderSecondaryTitle = ({ input, secondaryTitle }) => {
    return (
      <TextInput
        {...input}
        secondaryTitle
        black
        placeholder="Mica descriere (durata in ore)"
        value={secondaryTitle}
        onChange={this.onInputChangeSecondaryTitle}
      />
    );
  };

  renderTextArea = ({
    input,
    textArea,
    meta: { touched, error, disabled },
  }) => {
    return (
      <TextArea
        {...input}
        onChange={this.onInputChangeTextArea}
        value={textArea}
      />
    );
  };

  handleOfferPlan = (event) => {
    let text = event.target.textContent;

    const updatedOfferPlan = {
      ...this.state.offerPlan,
    };
    updatedOfferPlan[text] = !this.state.offerPlan[text];
    this.setState({
      offerPlan: updatedOfferPlan,
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

  onInputChangeTextArea = (text) => {
    const newText = text;
    const updateCardText = this.state.textCard;
    updateCardText.text = newText;
    this.setState({
      textCard: updateCardText,
    });
  };

  onSaveHandler = () => {
    const newCard = new SavedOfferCard();
    newCard.textCard = { ...this.state.textCard };
    newCard.textCard.id = (1.0 + this.props.id / 10).toFixed(1);
    newCard.idx = this.props.id;

    newCard.offerPlan = { ...this.state.offerPlan };

    this.setState({
      savedCard: newCard,
    });
    this.props.onSave(newCard, this.props.id);
  };
  onDeleteHandler = (props) => {
    console.log("[onDeleteHandler]", props);
    this.props.onDelete();
  };

  render() {
    const { title, secondaryTitle, text } = this.state.textCard;
    // console.log("[onSaveHandler]", this.props);

    return (
      <React.Fragment>
        <form>
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
                <Field
                  type="text"
                  name="title"
                  title={title}
                  component={this.renderTitle}
                />
              ) : (
                ""
              )}

              <Field
                type="text"
                name="secondaryTitle"
                secondaryTitle={secondaryTitle}
                component={this.renderSecondaryTitle}
              />

              <Field
                type="text"
                name="textArea"
                textArea={text}
                component={this.renderTextArea}
              />
              <div
                style={{
                  display: "flex",
                  flexFlow: "row-reverse ",
                  textAlign: "right",
                }}
              >
                {this.props.idx ? (
                  <TextSmall
                    onClick={this.onDeleteHandler}
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
        </form>
      </React.Fragment>
    );
  }
}

const TextContainer = styled.div`
  display: flex;
  height: auto;
  width: 890px;
`;

export default reduxForm({
  form: "offerCard",
})(OfferForm);
