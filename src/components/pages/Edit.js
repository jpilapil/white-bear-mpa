import React from "react";
import saveIcon from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
const memoryCard = memoryCards[2];

export default function Edit() {
  return (
    <AppTemplate>
      <div>
        <h4 className="my-4 text-center text-muted">Edit card</h4>

        {/* Card */}
        <div className="mb-2">
          <div className="card bg-primary">
            <div className="card-body">
              <textarea
                rows="11"
                className="d-sm-none"
                defaultValue={memoryCard.imagery}
                autoFocus
              ></textarea>
              <textarea
                rows="8"
                className="d-none d-sm-block"
                defaultValue={memoryCard.imagery}
                autoFocus
              ></textarea>
            </div>
          </div>

          <div className="card bg-secondary">
            <div className="card-body">
              <textarea
                rows="11"
                className="d-sm-none"
                defaultValue={memoryCard.answer}
                autoFocus
              ></textarea>
              <textarea
                rows="8"
                className="d-none d-sm-block"
                defaultValue={memoryCard.answer}
                autoFocus
              ></textarea>
            </div>
          </div>
        </div>

        {/* Character count */}
        <div id="the-count" className="float-right my-2">
          <span id="current">0</span>
          <span id="maximum">/ 240</span>
        </div>

        {/* Clear float */}
        <div className="clearfix"></div>

        <Link to="/all-cards" id="discard-changes" className="btn btn-link">
          Discard changes
        </Link>

        <Link
          to="/all-cards"
          className="btn btn-lg btn-primary float-right"
          id="save-imagery"
        >
          <img
            src={saveIcon}
            width="20px"
            style={{ marginBottom: "3px" }}
            className="mr-2"
            alt="save button"
          />
          Save
        </Link>

        {/* Card props and delete card */}

        <h4 className="text-center mt-5 text-muted">Card properties</h4>
        <div className="row mt-5">
          <p className="text-muted col-4 mb-5">
            Created:
            <br />
            Last attempt:
            <br />
            Next Attempt:
            <br />
            Consecutives:
            <br />
          </p>
          <p className="col-5">
            {toDisplayDate(memoryCard.createdAt, "MMM. d, y")} <br />
            {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}
            <br />
            {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}
            <br />
            {memoryCard.totalSuccessfulAttempts}
            <br />
          </p>

          <div className="custom-control custom-checkbox mb-4 col-12 ml-3 ">
            <input
              type="checkbox"
              className="custom-control-input"
              id="show-delete"
            />
            <label
              className="custom-control-label text-muted"
              htmlFor="show-delete"
            >
              Show Delete Button
            </label>
          </div>
          <Link
            to="/all-cards"
            className="btn btn-lg btn-outline-danger d-none ml-3"
            id="delete-card"
          >
            Delete this card
          </Link>
        </div>
      </div>
    </AppTemplate>
  );
}
