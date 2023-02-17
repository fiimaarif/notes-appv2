import React from 'react';
import PropTypes from 'prop-types';

export function DeleteButton({ handleDelete }) {
  return (
    <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      <i className="fa-solid fa-trash"></i> Delete
    </button>
  );
}

DeleteButton.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
