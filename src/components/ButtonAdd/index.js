import React from 'react';
import { Link } from 'react-router-dom';

export function ButtonAdd() {
  return (
    <Link to="/new">
      <button
        className="btn btn-warning rounded-pill mt-2 fixed-bottom mb-5 me-5 ms-auto"
        style={{ width: '80px', height: '80px' }}
      >
        <i className="fa-solid fa-plus fa-2xl" title="Add"></i>
      </button>
    </Link>
  );
}
