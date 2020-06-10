import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import appLogo from "../../icons/logo-app.svg";

export default function ReviewAnswer() {
  return (
    <div className="container">
      <div className="row mt-1">
        {/* Header with logo */}
        <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <img src={appLogo} width="32px;" alt="White Bear Logo" />
          <h3 className="d-inline text-brand">White Bear</h3>
          <button href="/index.html" className="btn btn-link float-right">
            Log out
          </button>

          {/* Nav bar */}
          <div
            className="btn-group d-flex mb-5"
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
              className="btn btn-secondary navigation-button tab-separator tab-active"
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

          {/* Card  */}
          <div className="mb-5">
            <div className="card bg-primary">
              <div className="card-body">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisit
                </p>
              </div>
            </div>

            <div className="card bg-secondary">
              <div className="card-body">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisit
                </p>
              </div>
            </div>
          </div>
          <button href="/all-cards-edit.html" className="btn btn-link">
            Edit
          </button>
          <div className="float-right">
            <button
              href="/review-done.html"
              className="btn btn-outline-primary mr-4"
            >
              Needs Work
            </button>
            <button href="/review-done.html" className="btn btn-primary">
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
        </div>
      </div>
    </div>
  );
}
