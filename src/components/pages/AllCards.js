import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
import orderBy from "lodash/orderBy";

// const memoryCard = memoryCards[2];

export default class AllCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '[["createdAt"], ["desc"]]',
      memoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
    };
  }

  setMemoryCardsOrder(e) {
    console.log("changed");
    const newOrder = e.target.value;
    console.log(newOrder); //returns string
    const copyOfMemoryCards = [...this.state.memoryCards]; // array of all our memory cards, shallow copy
    const toJson = JSON.parse(newOrder);
    const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
    this.setState({ order: newOrder, memoryCards: orderedMemoryCards }); //updates state of the select to show which filter you clicked on (most recent, oldest, hardest, etc)
  }

  render() {
    return (
      <AppTemplate>
        <div>
          {/* Search */}
          <div className="row mt-3">
            <div className="col-8 col-sm-8 mb-4">
              <input
                type="search"
                className="form-control border"
                placeholder="Search for a word"
              />
            </div>
            <div className="col-4 col-sm-4 mb-4">
              <button className="btn btn-sm btn-primary float-right">
                Search
              </button>
            </div>
          </div>

          {/* Sort  */}

          <div className="row">
            <div className="col-6 mb-4">
              <p className="text-muted">Sort cards by</p>
            </div>
            <div className="col-6 mb-4">
              <select
                value={this.state.order}
                className="form-control form-control-sm"
                onChange={(e) => this.setMemoryCardsOrder(e)}
              >
                <option value='[["createdAt"], ["desc"]]'>Most recent</option>
                <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                  Hardest
                </option>
                <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                  Easiest
                </option>
              </select>
            </div>
          </div>
          {this.state.memoryCards.map((memoryCard) => {
            // map through memory cards array, get each memory card
            // find each card by id, return answer and imagery values
            return (
              <MemoryCard
                answer={memoryCard.answer}
                imagery={memoryCard.imagery}
                key={memoryCard.id}
              />
            );
          })}
        </div>
      </AppTemplate>
    );
  }
}
