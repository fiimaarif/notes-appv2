import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../utils/404.png';

export function NotFoundPage() {
  return (
    <div className="container">
      <div className="d-flex mt-5 justify-content-center">
        <img src={image} />
      </div>
      <div className="text-center mt-3">
        <p>
          Uh oh, we couldn't find the page you're looking for. <br /> Maybe try
          searching for it or head back to the homepage.
        </p>
        <Link to="/" className="btn btn-success">
          {' '}
          <i className="fa-solid fa-angles-left me-1"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
