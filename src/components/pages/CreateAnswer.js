import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
  return (
    <AppTemplate>
      <Header />
      <Navigation />
      <div>
        <h4 className="my-4 text-center text-muted">Add an answer</h4>

        {/* Card */}
        <div className="mb-2">
          <div className="card bg-secondary">
            <div className="card-body">
              <textarea rows="11" className="d-sm-none" autoFocus></textarea>
              <textarea
                rows="6"
                className="d-none d-sm-block"
                autoFocus
              ></textarea>
            </div>
          </div>
        </div>

        {/* Character counter */}
        <div id="theCount" className="float-right my-3">
          <span id="current">0</span>
          <span id="maximum">/ 240</span>
        </div>

        {/* Clears float */}
        <div className="clearfix"></div>

        <Link
          to="/create-imagery"
          className="btn btn-lg btn-outline-primary float-right"
          id="nextAnswer"
        >
          Next
        </Link>
      </div>
    </AppTemplate>
  );
}
