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
  state = {
    keyList: [],
  };
  componentDidMount() {
    this.props.showCards(this.props.cards);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("[componentDidUpdate  :]");
    if (prevProps.cards !== this.props.cards) {
      console.log("[componentDidUpdate - if:]", "CHANGE");
      this.renderList();
    }
  }
  getRndInteger = () => {
    return Math.round(Math.random().toFixed(5) * 1000);
  };

  handleKeyList = () => {
    let newKeyList = this.state.keyList;

    let newKey = Math.round(Math.random().toFixed(5) * 1000);

    while (newKeyList.includes(newKey)) {
      newKey = Math.round(Math.random().toFixed(5) * 1000);
    }
    newKeyList.push(newKey, newKey * 7);
    this.setState({ keyList: newKeyList });
  };

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
    this.handleKeyList();
    savedCard.key = this.state.keyList[cardIndex];
    this.props.createCard(savedCard, cardIndex);

    let defaultCardIndex = cardIndex + 1;
    defaultCard.key = this.state.keyList[cardIndex + 1];
    this.props.showDefault(defaultCard, defaultCardIndex);
  };

  onDeleteHandler = (key, id) => {
    // const id = this.props.cards.indexOf(key);
    console.log("[onDeleteHandler]", key);
    this.props.deleteCard(id);
    let newKeyList = this.state.keyList;

    // console.log("[onDeleteHandler - BEFORE]", newKeyList);
    const index = newKeyList.indexOf(key);
    if (index > -1) {
      newKeyList.splice(index, 1);
    }
    // console.log("[onDeleteHandler - AFTER]", newKeyList);

    this.setState({
      keyList: newKeyList,
    });
  };

  renderList = () => {
    return this.props.cards.map((card, index) => (
      <OfferCard
        key={card.index}
        id={index}
        idx={index}
        onSave={this.onSaveHandler}
        onDelete={() => this.onDeleteHandler(card.key, index)}
      />
    ));
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

    return <ul>{cards}</ul>;
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
