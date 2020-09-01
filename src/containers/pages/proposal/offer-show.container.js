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
    this.handleKeyList();
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

    let newKey = Math.round(Math.random().toFixed(7) * 1000);

    while (newKeyList.includes(newKey)) {
      newKey = Math.round(Math.random().toFixed(7) * 1000);
    }
    newKeyList.push(newKey, newKey * 3);
    this.setState({ keyList: newKeyList });
  };

  onSaveHandler = (savedCard, cardIndex) => {
    this.handleKeyList();
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
    savedCard.key = this.state.keyList[cardIndex];
    this.props.createCard(savedCard, cardIndex);

    let defaultCardIndex = cardIndex + 1;
    defaultCard.key = this.state.keyList[cardIndex + 1];
    defaultCard.idx = defaultCardIndex;

    this.props.showDefault(defaultCard, defaultCardIndex);
    // console.log("[onSaveHandler - AFTER]", this.state.keyList);
  };

  onDeleteHandler = (key, id) => {
    // let defaultCard = {
    //   textCard: {
    //     id: 0.0,
    //     title: "",
    //     secondaryTitle: "",
    //     text: "",
    //   },
    //   offerPlan: {
    //     standard: false,
    //     recomandat: false,
    //     premium: false,
    //   },
    // };
    console.log("[onDeleteHandler: ]", key, id);
    this.props.deleteCard(id);

    let newKeyList = this.state.keyList;
    const index = newKeyList.indexOf(key);
    // let defaultCardIndex = this.props.cards.length - 1;
    // defaultCard.idx = defaultCardIndex;
    // defaultCard.isSaved = false;
    // defaultCard.key = newKeyList[newKeyList.length - 1];
    if (index > -1) {
      newKeyList.splice(index, 1);
    }

    console.log(
      "[onDeleteHandler - BEFORE]",
      this.props.cards.length,
      this.props.cards
    );

    // this.props.showDefault(defaultCard, defaultCardIndex);

    this.setState({
      keyList: newKeyList,
    });
    this.handleKeyList();
    // this.props.showCards(this.props.cards);

    // console.log("[onDeleteHandler - AFTER]", this.state.keyList);
  };

  renderList = () => {
    return this.props.cards.map((card, index) => {
      return (
        <div key={card.key.toString()}>
          <OfferCard
            isSaved={card.isSaved}
            id={index}
            onSave={this.onSaveHandler}
            onDelete={() => this.onDeleteHandler(card.key, card.idx)}
          />
        </div>
      );
    });
  };

  render() {
    // console.log("[showCards]", this.state.proposal);
    console.log("[render]", this.state.keyList, this.props.cards);
    if (!this.props.cards) {
      return <div>Loading...</div>;
    }
    let defaultCard = <OfferCard id={0.0} onSave={this.onSaveHandler} />;
    let cards = null;

    if (!this.props.cards.length) {
      console.log(this.state.keyList[1]);
      cards = <div key={this.state.keyList[1]}>{defaultCard}</div>;
    } else if (this.props.cards) {
      cards = this.renderList();
    }

    return <div>{cards}</div>;
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
