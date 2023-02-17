import React from 'react';
import { showFormattedDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function CardNote({ noteList }) {
  return (
    <div className="d-flex justify-content-between flex-wrap">
      {noteList.map((note) => (
        <div
          key={note.id}
          className="col-12 col-md-5 col-lg-5 card shadow-sm m-2"
        >
          <div className="card-body">
            <Link
              to={`/note/${note.id}`}
              className="text-decoration-none text-dark"
            >
              <h5 className="card-title">{note.title}</h5>

              <h6 className="card-subtitle mb-2 text-muted">
                {showFormattedDate(note.createdAt)}
              </h6>
              <p className="card-text">{note.body.slice(0, 100)}...</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

CardNote.propTypes = {
  noteList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
