import React, { Component } from "react";

import _ from "lodash";

///// COMPONENTS /////
import OfferCard from "./offer-form.container";

class OfferShow extends Component {
  state = {
    proposal: {},
    card: {},
    showCards: false,
    isEditable: false,
    isDeleted: false,
  };

  onSaveHandler = (savedCard, cardIndex) => {
    console.log("[onSaveHandler]", cardIndex);

    savedCard.isSaved = true;
    savedCard.isDeleted = false;

    let updatedProposal = {
      ...this.state.proposal,
      [cardIndex]: _.assign(savedCard),
    };

    // const index = updatedCardsList.findIndex((e) => e.idx === cardIndex);
    // console.log(index);

    // if (index !== cardIndex && cardIndex === 0) {
    //   updatedCardsList.push(savedCard, defaultCard);
    // } else if (index !== cardIndex) {
    //   updatedCardsList.push(savedCard);
    // }

    // if (index === cardIndex) {
    //   updatedCardsList[index] = savedCard;
    // }

    // if (this.state.card) {
    //   this.setState({ showCards: true });
    // }
    this.setState({
      card: savedCard,
      proposal: updatedProposal,
      showCards: true,
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
    console.log("[renderList]", this.state.proposal);
    const cardsList = Object.values(this.state.proposal);
    return _.map(cardsList, (card, index) => {
      // console.log(index);
      // console.log(card.isSaved);
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
    console.log("[showCards]", this.state.proposal);
    let defaultCard = <OfferCard id={0.0} onSave={this.onSaveHandler} />;
    let cards = null;

    if (this.state.showCards) {
      cards = <React.Fragment>{this.renderList()}</React.Fragment>;
    } else {
      cards = defaultCard;
    }

    return (
      <React.Fragment>
        <ul>{cards}</ul>
      </React.Fragment>
    );
  }
}

export default OfferShow;

// id={(1.1 + index / 10).toFixed(1)}

//updated offer-card-list.container
