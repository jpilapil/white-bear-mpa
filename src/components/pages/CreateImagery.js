import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function CreateImagery() {
  return (
    <AppTemplate>
      <Header />
      <Navigation />

      <h4 className="my-4 text-center text-muted">Add memorable imagery</h4>

      {/* Card */}
      <div className="mb-2">
        <div className="card bg-primary">
          <div className="card-body">
            <textarea
              rows="11"
              className="d-sm-none"
              autoFocus={true}
            ></textarea>
            <textarea
              rows="6"
              className="d-none d-sm-block"
              autoFocus={true}
            ></textarea>
          </div>
        </div>

        <div className="card bg-secondary">
          <div className="card-body">
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisit
            </p>
          </div>
        </div>
      </div>

      {/* Character counter */}
      <div id="the-count" className="float-right my-2">
        <span id="current">0</span>
        <span id="maximum">/ 240</span>
      </div>

      {/* Clears float */}
      <div className="clearfix"></div>

      <button id="delete-imagery" className="btn btn-link">
        Back to answer
      </button>

      <button className="btn btn-lg btn-primary float-right" id="saveImagery">
        <img
          alt=""
          src={saveIcon}
          width="20px"
          style={{ marginBottom: "3px" }}
          className="mr-2"
        />
        Save
      </button>
    </AppTemplate>
  );
}
