import React from "react";
import editIcon from "../../icons/edit.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function AllCards() {
  return (
    <AppTemplate>
      <div>
        {/* Search */}
        <div className="row mt-3">
          <div className="col-8 col-sm-8 mb-4">
            <input
              type="search"
              className="form-control border"
              placeholder="Search for a word"
            />
          </div>
          <div className="col-4 col-sm-4 mb-4">
            <button className="btn btn-sm btn-primary float-right">
              Search
            </button>
          </div>
        </div>

        {/* Sort  */}

        <div className="row">
          <div className="col-6 mb-4">
            <p className="text-muted">Sort cards by</p>
          </div>
          <div className="col-6 mb-4">
            <select className="custom-select border" id="inputGroupSelect01">
              <option defaultValue>Most recent</option>
              <option value="1">Oldest</option>
              <option value="2">Hardest</option>
              <option value="3">Easiest</option>
            </select>
          </div>
        </div>

        {/* Card */}
        <div className="row">
          <div className="col-9">
            <div className="mb-5">
              <div className="card bg-primary">
                <div className="card-body">
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisit
                  </p>
                </div>
              </div>

              <div className="card bg-secondary">
                <div className="card-body">
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisit
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Edit button */}
          <div className="col-3">
            <Link to="/edit" className="btn btn-link d-inline">
              <img src={editIcon} alt="Edit Button" width="20px;" />
              Edit
            </Link>
          </div>
        </div>

        {/* Second card */}
        <div className="row">
          <div className="col-9">
            <div className="mb-5">
              <div className="card bg-primary">
                <div className="card-body">
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisit
                  </p>
                </div>
              </div>

              <div className="card bg-secondary">
                <div className="card-body">
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisit
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Edit button */}
          <div className="col-3">
            <Link to="/edit" className="btn btn-link d-inline">
              <img src={editIcon} alt="Edit Link" width="20px;" />
              Edit
            </Link>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
