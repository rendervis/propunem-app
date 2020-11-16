import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormMeta, isDirty } from "redux-form";

import SavedOfferCard from "../../../models/savedOfferCard";

import styled from "styled-components";

///// COMPONENTS /////

///////UX
import TextArea from "../../../components/UX/text-area";
///// UI elements /////
import {
  TextRegular,
  TextSmall,
  TextInput,
} from "../../../components/UI/ui-elements";

const textAreaPlaceHolder =
  "Descrierea momentului cu pasii care trebuiesc urmati si responsabilitati.";
class OfferCard extends Component {
  state = {
    key: this.props.offerKey,
    idx: this.props.idx,

    textCard: {
      textId: this.props.textId,
      title: this.props.offerTitle,
      secondaryTitle: this.props.offerSecondaryTitle,
      text: this.props.offerText,
      touched: false,
    },
    offerPlan: {
      standard: this.props.plan.standard || false,
      recomandat: this.props.plan.recomandat || false,
      premium: this.props.plan.premium || false,
    },
    smallText: ["standard", "recomandat", "premium"],
    isSaved: false,
  };

  renderTitle = ({ type, meta: { visited, touched } }) => {
    console.log("this.props.offerTitle", this.props.offerTitle);
    return (
      <React.Fragment>
        <TextInput
          type={type}
          titleStyle
          black
          placeholder="Adauga titlu"
          defaultValue={this.props.offerTitle}
          onChange={this.onInputChangeTitle}
        />
      </React.Fragment>
    );
  };
  renderSecondaryTitle = ({
    type,

    meta: { touched, error, disabled },
  }) => {
    return (
      <TextInput
        type={type}
        secondaryTitleStyle
        black
        placeholder="Mica descriere (durata in ore)"
        defaultValue={this.props.offerSecondaryTitle}
        onChange={this.onInputChangeSecondaryTitle}
      />
    );
  };

  renderTextArea = ({
    type,
    textArea,

    meta: { touched, error, disabled },
  }) => {
    return (
      <TextArea
        type={type}
        onChange={this.onInputChangeTextArea}
        placeholder={textAreaPlaceHolder}
        defaultValue={this.props.offerText}
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
      ...this.state,
      textCard: {
        textId: this.props.textId || this.state.textCard.textId,
        title: this.props.offerTitle || this.state.textCard.title,
        secondaryTitle:
          this.props.offerSecondaryTitle || this.state.textCard.secondaryTitle,
        text: this.props.offerText || this.state.textCard.text,
        touched: true,
      },
      offerPlan: updatedOfferPlan,
    });
  };

  onInputChangeTitle = (event) => {
    const newTitle = event.target.value;
    // const updateTitle = { ...this.state.textCard };
    // updateTitle.title = newTitle;
    // updateTitle.textId = this.props.textId;
    // updateTitle.touched = !this.props.touched;

    this.setState({
      textCard: {
        textId: this.props.textId,
        title: newTitle,
        secondaryTitle:
          this.props.offerSecondaryTitle || this.state.textCard.secondaryTitle,
        text: this.props.offerText || this.state.textCard.text,
        touched: !this.state.touched,
      },
      key: this.props.offerKey,
      idx: this.props.idx,
    });
  };
  onInputChangeSecondaryTitle = (event) => {
    const newSecondaryTitle = event.target.value;
    // const updateSecondaryTitle = { ...this.state.textCard };
    // updateSecondaryTitle.secondaryTitle = newSecondaryTitle;
    // updateSecondaryTitle.textId = this.props.textId;
    // updateSecondaryTitle.touched = !this.props.touched;
    this.setState({
      textCard: {
        textId: this.props.textId,
        title: this.props.offerTitle || this.state.textCard.title,
        secondaryTitle: newSecondaryTitle,
        text: this.props.offerText || this.state.textCard.text,
        touched: !this.state.touched,
      },
      key: this.props.offerKey,
      idx: this.props.idx,
    });
  };

  onInputChangeTextArea = (text) => {
    const newText = text;
    // const updateCardText = this.state.textCard;
    // updateCardText.text = newText;
    // updateCardText.textId = this.props.textId;
    // updateCardText.touched = !this.props.touched;
    this.setState({
      ...this.state,
      textCard: {
        textId: this.props.textId,
        title: this.props.offerTitle || this.state.textCard.title,
        secondaryTitle:
          this.props.offerSecondaryTitle || this.state.textCard.secondaryTitle,
        text: newText,
        touched: !this.state.touched,
      },
      key: this.props.offerKey,
      idx: this.props.idx,
    });
  };

  onSaveHandler = () => {
    const newCard = new SavedOfferCard();
    newCard.textCard = { ...this.state.textCard };
    newCard.textCard.textId = (1.0 + this.props.id / 10).toFixed(1);
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
    let { textCard, offerPlan, key, idx } = this.state;
    // console.log("[onUpdateHandler]", idx);
    // if (offerPlan !== this.props.plan) {
    //   offerPlan = this.props.plan;
    // }
    this.setState({
      ...this.state,
      textCard: {
        ...this.textCard,
        touched: false,
      },
    });
    this.props.onUpdate({ textCard, offerPlan, key, idx });
  };

  render() {
    // console.log("[OfferForm]");
    const { title, secondaryTitle, text, touched } = this.state.textCard;

    console.log("[state]", this.state);
    // console.log("[props]", this.props);

    return (
      <div>
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
                  red={touched}
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
                  blue={this.props.plan[text] || this.state.offerPlan[text]}
                >
                  {text}
                </TextSmall>
              ))}
            </div>
          </div>
        </TextContainer>
      </div>
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
})(OfferCard);
