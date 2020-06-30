import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewAnswer extends React.Component {
  goToNextCard() {
    this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
    this.props.history.push("/review-imagery");
  }
  render() {
    const memoryCard = this.props.queue.cards[this.props.queue.index]; // get all the cards from the queue and use bracket notation to find the index of the current card
    return (
      <AppTemplate>
        <div className="mb-5"></div>
        {/* Card  */}
        <div className="mb-5">
          <div className="card bg-primary">
            <div className="card-body">{memoryCard && memoryCard.imagery}</div>
          </div>

          <div className="card bg-secondary">
            <div className="card-body">{memoryCard && memoryCard.answer}</div>
          </div>
        </div>
        {/* buttons */}
        <Link to="/edit" className="btn btn-link">
          Edit
        </Link>
        <div className="float-right">
          <button
            className="btn btn-outline-primary mr-4"
            onClick={() => {
              this.goToNextCard();
            }}
          >
            Needs Work
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.goToNextCard();
            }}
          >
            <img
              alt=""
              src={thumbsUpIcon}
              width="20px"
              style={{ marginBottom: "5px" }}
              className="mr-2"
            />
            Got it
          </button>
        </div>
      </AppTemplate>
    );
  }
}
function mapStateToProps(state) {
  // map state to props in local component
  return {
    queue: state.queue,
  };
}
export default connect(mapStateToProps)(ReviewAnswer);
