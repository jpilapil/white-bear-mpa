import React from "react";
import saveIcon from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    console.log("in here");
    this.state = {
      answerText: memoryCard.answer,
      imageryText: memoryCard.imagery,
      isDeleteChecked: false,
    };
  }

  checkTextLimit() {
    if (
      this.state.answerText.length > MAX_CARD_CHARS ||
      this.state.answerText.length === 0 ||
      this.state.imageryText.length > MAX_CARD_CHARS ||
      this.state.imageryText.length === 0
    ) {
      return true;
    } else return false;
  }

  setImageryText(e) {
    this.setState({ imageryText: e.target.value });
  }

  setAnswerText(e) {
    this.setState({ answerText: e.target.value });
  }

  showDeleteButton() {
    this.setState({ isDeleteChecked: !this.state.isDeleteChecked });
  }

  render() {
    return (
      <AppTemplate>
        <div>
          <h4 className="my-4 text-center text-muted">Edit card</h4>
          {/* Card */}
          <div className="mb-2">
            <div className="card bg-primary">
              <div className="card-body">
                {/* <textarea
                  rows="11"
                  className="d-sm-none"
                  defaultValue={memoryCard.imagery}
                  autoFocus
                ></textarea> */}
                <textarea
                  rows="8"
                  defaultValue={memoryCard.imagery}
                  autoFocus
                  onChange={(e) => this.setImageryText(e)}
                ></textarea>
              </div>
            </div>

            <div className="card bg-secondary">
              <div className="card-body">
                {/* <textarea
                  rows="11"
                  className="d-sm-none"
                  defaultValue={memoryCard.answer}
                  autoFocus
                ></textarea> */}
                <textarea
                  rows="8"
                  defaultValue={memoryCard.answer}
                  autoFocus
                  onChange={(e) => this.setAnswerText(e)}
                ></textarea>
              </div>
            </div>
          </div>
          {/* Character count */}

          <p className="float-right mt-2 mb-5 text-muted">
            <span
              className={classnames({
                "text-danger": checkIsOver(
                  this.state.answerText,
                  MAX_CARD_CHARS
                ),
              })}
            >
              Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
            </span>
          </p>
          <p className="float-left mt-2 mb-5 text-muted">
            <span
              className={classnames({
                "text-danger": checkIsOver(
                  this.state.imageryText,
                  MAX_CARD_CHARS
                ),
              })}
            >
              Top: {this.state.imageryText.length}/{MAX_CARD_CHARS}
            </span>
          </p>

          {/* Clear float */}
          <div className="clearfix"></div>
          <Link to="/all-cards" id="discard-changes" className="btn btn-link">
            Discard changes
          </Link>
          <Link
            to="all-cards"
            className={classnames("btn btn-lg btn-primary float-right", {
              disabled: this.checkTextLimit(),
            })}
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
                onClick={() => {
                  // on click, runs showDeleteButton func
                  this.showDeleteButton();
                }}
              />
              <label
                className="custom-control-label text-muted"
                htmlFor="show-delete"
              >
                Show Delete Button
              </label>
            </div>
            {this.state.isDeleteChecked && ( // if isDeleteChecked = true, show delete button
              <Link
                to="/all-cards"
                className="btn btn-lg btn-outline-danger ml-3"
                id="delete-card"
              >
                Delete this card
              </Link>
            )}
          </div>
        </div>
      </AppTemplate>
    );
  }
}
