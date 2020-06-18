import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

// const memoryCard = memoryCards[2];

export default function AllCards() {
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
            <select className="custom-select border" id="inputGroupSelect01">
              <option defaultValue>Most recent</option>
              <option value="1">Oldest</option>
              <option value="2">Hardest</option>
              <option value="3">Easiest</option>
            </select>
          </div>
        </div>
        {memoryCards.map((memoryCard) => {
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
