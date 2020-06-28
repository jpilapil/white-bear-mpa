import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

const memoryCard = memoryCards[2];

class ReviewImagery extends React.Component {
  constructor(props) {
    super(props);

    // Make a request for a user with a given ID
    axios
      .get(
        "https://raw.githubusercontent.com/jpilapil/white-bear-mpa/master/src/mock-data/memory-cards.json"
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
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
}
export default withRouter(ReviewImagery);
