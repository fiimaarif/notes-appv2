import React from 'react';
import image from '../../utils/not_found.png';
import PropTypes from 'prop-types';

export function EmptyNote({ isArchive = false }) {
  const message = isArchive ? 'Archive not found' : 'Notes not found';
  return (
    <div className="mt-5 pt-5">
      <div className="text-center">
        <img className="me-5" src={image} alt="not-found" />
      </div>
      <div className="text-center">
        <h5 className="text-danger">{message}</h5>
      </div>
    </div>
  );
}

EmptyNote.propTypes = {
  isArchive: PropTypes.bool,
};
