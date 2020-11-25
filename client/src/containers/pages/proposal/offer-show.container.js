import React, { Component } from "react";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";
///////ACTIONS
import {
  fetchOfferCards,
  saveCard,
  updateCard,
  showDefault,
  createCard,
  deleteCard,
  offerClearState,
} from "../../../redux/actions/offer.actions";
///////COMPONENTS
import OfferCard from "./OfferCard";

class OfferShow extends Component {
  state = {
    keyList: [],
  };

  componentDidMount() {
    // console.log("[componentDidMount]", "mounted!");
    let { proposalId, cards } = this.props;
    this.handleKeyList();
    this.props.offerClearState();
    if (proposalId) {
      this.props.fetchOfferCards({ proposalId, cards });
      // console.log("componentDidUpdate  cards", this.props.cards);
    }
  }
  componentDidUpdate(prevProps) {
    // console.log("[componentDidUpdate]", "mounted!");
    // Typical usage (don't forget to compare props):
    if (this.props.cards.length === 0) {
      this.props.createCard({
        card: {
          key: uuidv4(),
          idx: 1,
          textCard: {
            textId: "1.0",
            title: "",
            secondaryTitle: "",
            text: "",
          },
          offerPlan: {
            standard: false,
            recomandat: false,
            premium: false,
          },
        },
      });
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
    console.log("onSaveHandler", this.props.proposalId);
    let { proposalId } = this.props;
    this.handleKeyList();
    savedCard.key = this.state.keyList[cardIndex];

    this.props.saveCard({ proposalId, savedCard });
  };
  onAddDefaultHandler = (cardIndex) => {
    this.handleKeyList();
    let defaultCard = {
      key: uuidv4(),
      idx: cardIndex + 2,

      textCard: {
        textId: 0.0,
        title: "",
        secondaryTitle: "",
        text: "",
        touched: false,
      },
      offerPlan: {
        standard: false,
        recomandat: false,
        premium: false,
      },
    };
    this.props.showDefault({ defaultCard });
  };
  onUpdateHandler = ({ textCard, offerPlan, key, idx }) => {
    let { proposalId } = this.props;
    // let updatedCard = _.find(this.props.cards, function (card) {
    //   // console.log("textCard, offerPlan, idx ", textCard, offerPlan, idx);
    //   return card.idx === idx;
    // });
    let updatedCard = {
      key,
      idx,
      textCard,
      offerPlan,
    };

    console.log("updatedCard", updatedCard);
    this.props.updateCard({ proposalId, updatedCard });
  };

  onDeleteHandler = (key, idx) => {
    let { proposalId } = this.props;
    this.props.deleteCard({ proposalId, idx });

    let newKeyList = this.state.keyList;
    const index = newKeyList.indexOf(key);

    if (index > -1) {
      newKeyList.splice(index, 1);
    }

    this.setState({
      keyList: newKeyList,
    });
    this.handleKeyList();
  };

  renderList = () => {
    if (!this.props.cards) {
      return null;
    } else {
      return this.props.cards.map((card, index) => {
        // console.log("card", card.offerPlan);
        return (
          <div key={card.key.toString()}>
            <OfferCard
              isSaved={card.textCard.text}
              id={index}
              idx={card.idx}
              offerKey={card.key}
              textId={card.textCard.textId}
              onSave={this.onSaveHandler}
              onUpdate={this.onUpdateHandler}
              onDelete={() => this.onDeleteHandler(card.key, card.idx)}
              offerText={card.textCard.text}
              offerTitle={card.textCard.title}
              offerSecondaryTitle={card.textCard.secondaryTitle}
              plan={card.offerPlan}
              touched={card.textCard.touched}
            />
            {this.props.cards.length - 1 === index ? (
              <div onClick={() => this.onAddDefaultHandler(index)}>adauga</div>
            ) : (
              ""
            )}
          </div>
        );
      });
    }
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}
//   render() {
//     // console.log("[render]", this.props.cards);
//     if (!this.props.cards) {
//       return <div>Loading...</div>;
//     }
//     let defaultCard = <OfferCard id={0.0} onSave={this.onSaveHandler} />;
//     let cards = null;

//     if (!this.props.cards.length) {
//       cards = <div key={this.state.keyList[1]}>{defaultCard}</div>;
//     } else if (this.props.cards) {
//       cards = this.renderList();
//     }

//     return <div>{cards}</div>;
//   }
// }

const mapStateToProps = (state) => {
  return {
    cards: Object.values(state.offerCards.cards),
    // offerCards: Object.values(state.offer.offerCards),
    proposalId: state.proposal.proposalId,
  };
};

export default connect(mapStateToProps, {
  fetchOfferCards,
  saveCard,
  updateCard,
  showDefault,
  createCard,
  deleteCard,
  offerClearState,
})(OfferShow);

// id={(1.1 + index / 10).toFixed(1)}

//updated offer-card-list.container
