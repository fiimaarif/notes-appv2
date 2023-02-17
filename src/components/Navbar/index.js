import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="container mt-5 mb-1">
      <div className="row justify-content-center mx-1">
        <div className="col-lg-9 align-items-center justify-content-between d-flex">
          <div className="col-md-1 col-lg-1">
            <Link to="/">
              <div
                className="shadow-sm bg-white rounded text-center"
                title="Active"
              >
                <i className="fa-solid fa-square-poll-horizontal p-2"></i>
              </div>
            </Link>
          </div>
          <div className="col-md-1 col-lg-1">
            <Link to="/archive">
              <div
                className="shadow-sm bg-white rounded text-center"
                title="Archive"
              >
                <i className="fa-solid fa-file-arrow-down p-2"></i>
              </div>
            </Link>
          </div>
          <div className="col-md-7 col-lg-7">
            <form>
              <input
                className="form-control me-2 shadow-none rounded-pill"
                type="text"
                placeholder="Search Note title..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
