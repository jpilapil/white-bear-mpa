import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function Edit() {
  return (
    <AppTemplate>
      <Header />
      <Navigation />
      <div>
        <h4 className="my-4 text-center text-muted">Edit card</h4>

        {/* Card */}
        <div className="mb-2">
          <div className="card bg-primary">
            <div className="card-body">
              <textarea rows="11" className="d-sm-none" autoFocus></textarea>
              <textarea
                rows="8"
                className="d-none d-sm-block"
                autoFocus
              ></textarea>
            </div>
          </div>

          <div className="card bg-secondary">
            <div className="card-body">
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the
              </p>
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
            Created: <br />
            Last attempt: <br />
            attempt: <br />
            Consecutives:
            <br />
          </p>
          <p className="col-5">
            May 7, 2020 <br />
            May 7, 2020
            <br />
            May 7, 2020
            <br />
            10
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
