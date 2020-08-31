import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createCard,
  deleteCard,
  showDefault,
  showCards,
} from "../../../redux/actions/offer.actions";

import _ from "lodash";

///// COMPONENTS /////
import OfferCard from "./offer-form.container";

class OfferShow extends Component {
  onSaveHandler = (savedCard, cardIndex) => {
    let defaultCard = {
      textCard: {
        id: 0.0,
        title: "",
        secondaryTitle: "",
        text: "",
      },
      offerPlan: {
        standard: false,
        recomandat: false,
        premium: false,
      },
    };

    this.props.createCard(savedCard, cardIndex);
    let lastIndex = cardIndex + 1;
    this.props.showDefault(defaultCard, lastIndex);
  };

  onDeleteHandler = (id) => {
    console.log("[onDeleteHandler]", id);

    this.props.deleteCard(id);
  };

  renderList = () => {
    return this.props.cards.map((card, index) => {
      console.log("[renderList]", card.textCard.secondaryTitle + index);

      return (
        <OfferCard
          id={index}
          idx={index}
          onSave={this.onSaveHandler}
          onDelete={() => this.props.deleteCard(index)}
        />
      );
    });
  };

  render() {
    // console.log("[showCards]", this.state.proposal);
    console.log("[render]", this.props.cards);
    if (!this.props.cards) {
      return <div>Loading...</div>;
    }
    let defaultCard = <OfferCard id={0.0} onSave={this.onSaveHandler} />;
    let cards = null;

    if (!this.props.cards.length) {
      cards = defaultCard;
    } else if (this.props.cards) {
      cards = this.renderList();
    }

    return (
      <React.Fragment>
        <div>{cards}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: Object.values(state.offer.cards),
  };
};

export default connect(mapStateToProps, {
  createCard,
  deleteCard,
  showDefault,
  showCards,
})(OfferShow);

// id={(1.1 + index / 10).toFixed(1)}

//updated offer-card-list.container
