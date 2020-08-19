import React, { Component } from "react";

import _ from "lodash";

///// COMPONENTS /////
import OfferCard from "./offer-card.container";

class OfferCardList extends Component {
  state = {
    cardsList: [],
    card: {},
    showCards: false,
    isEditable: false,
    isDeleted: false,
  };

  onSaveHandler = (savedCard, cardIndex) => {
    savedCard.isSaved = true;
    savedCard.isDeleted = false;
    let updatedCardsList = [...this.state.cardsList];

    const index = updatedCardsList.findIndex((e) => e.idx === savedCard.idx);

    if (index !== cardIndex) {
      updatedCardsList.push(savedCard);
    } else {
      updatedCardsList[cardIndex] = savedCard;
    }

    if (this.state.card) {
      this.setState({ showCards: true });
    }
    this.setState({
      card: savedCard,
      cardsList: updatedCardsList,
    });
  };

  onDeleteHandler = (cardIndex) => {
    let updatedCardsList = [...this.state.cardsList];
    console.log("[onDeleteHandler]", cardIndex);
    if (cardIndex === 0) {
      this.setState({ showCards: false });
    }
    updatedCardsList.splice(cardIndex, 1);
    this.setState({ cardsList: updatedCardsList });
    console.log("[showCards]", this.state.showCards);
  };

  renderList = () => {
    console.log("[renderList]", this.state.cardsList);
    return _.map(this.state.cardsList, (card, index) => {
      console.log(index);
      console.log(card.isSaved);
      return (
        <OfferCard
          key={card.secondaryTitle}
          id={index}
          idx={index}
          isSaved={card.isSaved}
          onSave={this.onSaveHandler}
          onDelete={() => this.onDeleteHandler(index)}
        />
      );
    });
  };
  // renderList = () => {
  //   console.log("[renderList]", this.state.cardsList);
  //   return this.state.cardsList.map((card, index) => {
  //     console.log(index);
  //     return (
  //       <React.Fragment>
  //         <OfferCard
  //           key={card.secondaryTitle}
  //           id={(1.1 + index / 10).toFixed(1)}
  //           idx={index + 1}
  //           onSave={this.onSaveHandler}
  //           onDelete={this.onDeleteHandler}
  //           newTitle={card.content.title}
  //           newSecondaryTitle={card.content.secondaryTitle}
  //         />
  //       </React.Fragment>
  //     );
  //   });
  // };

  render() {
    console.log("[showCards]", this.state.showCards);
    let defaultCard = <OfferCard id={0.0} onSave={this.onSaveHandler} />;
    let cards = null;

    if (this.state.showCards) {
      cards = this.renderList();
    } else {
      cards = defaultCard;
    }

    return <ul>{cards}</ul>;
  }
}

export default OfferCardList;

// id={(1.1 + index / 10).toFixed(1)}
