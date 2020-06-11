import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
  return (
    <AppTemplate>
      <Header />
      <Navigation />
      <div>
        <div className="mb-5 mt-3">
          <div className="card bg-primary">
            <div className="card-body">
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisit
              </p>
            </div>
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
