import React, { Component } from "react";

///// COMPONENTS /////
import OfferCard from "./offer-card.container";

class OfferCardList extends Component {
  state = {
    card: {},
    cardsList: [],
    isSaved: false,
  };

  onSaveHandler = (savedCard) => {
    const saveState = !this.state.isSaved;
    let cardWithNoTitle = savedCard;
    this.setState({
      isSaved: saveState,
      card: savedCard,
    });
    this.state.cardsList.push(savedCard);
  };

  render() {
    console.log("[savedCard]", this.state.card);
    return (
      <ul>
        <OfferCard onSave={this.onSaveHandler} id={(1.0).toFixed(1)} />
        {this.state.cardsList.map((card, index) => (
          <OfferCard
            key={index}
            id={(1.1 + index / 10).toFixed(1)}
            onSave={this.onSaveHandler}
          />
        ))}
      </ul>
    );
  }
}

export default OfferCardList;
