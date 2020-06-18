import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewImagery() {
  return (
    <AppTemplate>
      <div>
        <div className="mb-5 mt-3">
          <div className="card bg-primary">
            <div className="card-body">{memoryCard.imagery}</div>
          </div>
        </div>
        <Link to="/all-cards" className="btn btn-link mt-2">
          Previous card
        </Link>
        <div className="float-right mt-2 ml-5">
          <Link
            to="/review-answer"
            className="btn btn-lg btn-outline-primary mr-0"
          >
            Show answer
          </Link>
        </div>
      </div>
    </AppTemplate>
  );
}
