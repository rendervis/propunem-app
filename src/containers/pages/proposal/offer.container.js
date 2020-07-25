import React, { Component } from "react";

import axios from "../../../axios-config";

///// COMPONENTS /////
import OfferText from "../../../components/offer-text.component";
import AddText from "../../../components/UX/add-text";
import AddEdiText from "../../../components/UX/add-editext";

class Offer extends Component {
  state = {
    textCard: {
      id: 1.0,
      title: "Executie",
      secondaryTitle: "Prezentare generala",
      content: "",
    },
  };

  onChangeHandler = (valEntered) => {
    const updatedContent = {
      ...this.state.textCard,
    };
    updatedContent.content = valEntered;
    this.setState({
      ...this.state,
      textCard: updatedContent,
    });
  };

  postDataHandler = () => {
    const post = {
      content: this.state.textCard.content,
    };
    const toJson = JSON.stringify(post);

    axios.post("/compose", toJson).then((response) => {
      console.log(response);
    });
  };

  render() {
    const { id, title, secondaryTitle } = this.state.textCard;

    let updateContent = <AddEdiText handleChange={this.onChangeHandler} />;

    return (
      <div>
        <OfferText
          id={id}
          title={title}
          secondaryTitle={secondaryTitle}
          content={updateContent}
          handleSave={this.postDataHandler}
        />
      </div>
    );
  }
}

export default Offer;
