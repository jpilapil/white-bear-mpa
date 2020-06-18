import React from "react";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
  //pass props as arg
  return (
    <div>
      {/* Card */}
      <div className="row">
        <div className="col-10">
          <div className="mb-5">
            <div className="card bg-primary">
              {/*call props and target imagery key */}
              <div className="card-body">{props.imagery}</div>
            </div>

            <div className="card bg-secondary">
              <div className="card-body">{props.answer}</div>
            </div>
          </div>
        </div>

        {/* Edit button */}
        <div className="col-2">
          <Link to="/edit" className="btn btn-link d-inline">
            <img src={editIcon} alt="Edit Button" width="20px;" />
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
