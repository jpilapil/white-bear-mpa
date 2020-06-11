import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewAnswer() {
  return (
    <AppTemplate>
      <div className="mb-5"></div>
      {/* Card  */}
      <div className="mb-5">
        <div className="card bg-primary">
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
      {/* buttons */}
      <Link to="/edit" className="btn btn-link">
        Edit
      </Link>
      <div className="float-right">
        <Link to="/review-empty" className="btn btn-outline-primary mr-4">
          Needs Work
        </Link>
        <Link to="/review-answer" className="btn btn-primary">
          <img
            alt=""
            src={thumbsUpIcon}
            width="20px"
            style={{ marginBottom: "5px" }}
            className="mr-2"
          />
          Got it
        </Link>
      </div>
    </AppTemplate>
  );
}
