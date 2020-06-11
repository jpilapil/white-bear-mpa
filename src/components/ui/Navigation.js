import React from "react";

export default function Navigation() {
  return (
    <div
      className="btn-group d-flex "
      role="navigation"
      aria-label="navigation"
    >
      <button
        href="create-answer.html"
        className="btn btn-secondary navigation-button tab-separator"
      >
        Create new
      </button>
      <button
        href="review-imagery.html"
        className="btn btn-secondary navigation-button tab-separator"
      >
        Review
      </button>
      <button
        href="/all-cards.html"
        className="btn btn-secondary navigation-button tab-separator"
      >
        All cards
      </button>
    </div>
  );
}
