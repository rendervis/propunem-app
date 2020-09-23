import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import SavedOfferCard from "../../../models/savedOfferCard";

import styled from "styled-components";

///// COMPONENTS /////

import TextArea from "./text-area";
///// UI elements /////
import {
  TextRegular,
  TextSmall,
  TextInput,
} from "../../../components/UI/ui-elements";

const textAreaPlaceHolder =
  "Descrierea momentului cu pasii care trebuiesc urmati si responsabilitati.";
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
    isSaved: false,
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
        placeholder={textAreaPlaceHolder}
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
    // console.log("[onSaveHandler]", typeof newCard.textCard.id);
    newCard.idx = this.props.id + 1;
    newCard.isSaved = true;

    newCard.offerPlan = { ...this.state.offerPlan };

    this.setState({
      savedCard: newCard,
      isSaved: true,
    });
    this.props.onSave(newCard, this.props.id + 1);
  };
  onUpdateHandler = () => {
    // console.log("[onUpdateHandler]", this.props);
    this.props.onUpdate(this.props.id + 1);
  };

  render() {
    // console.log("[OfferForm]");
    const { title, secondaryTitle, text } = this.state.textCard;
    // console.log("[onSubmit formValues: ]", this.props);

    return (
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
              {this.props.isSaved ? (
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

              {this.props.isSaved ? (
                <TextSmall
                  hovered
                  style={{ marginLeft: "34px" }}
                  onClick={this.onUpdateHandler}
                  red={this.props.touch}
                >
                  modifica
                </TextSmall>
              ) : (
                <TextSmall
                  hovered
                  red
                  style={{ marginLeft: "34px" }}
                  onClick={this.onSaveHandler}
                >
                  salveaza
                </TextSmall>
              )}

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
  touchOnChange: true,
})(OfferForm);
