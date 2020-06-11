import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
  return (
    <AppTemplate>
      <Header />
      <Navigation />
      <div>
        <h4 className="my-4 text-center text-muted">Out of cards</h4>

        <Link to="/review-answer" className="btn btn-link mt-3">
          Previous card
        </Link>

        <Link
          to="/review-imagery"
          className="btn btn-lg btn-outline-primary float-right mt-3"
        >
          Get more cards
        </Link>
      </div>
    </AppTemplate>
  );
}
