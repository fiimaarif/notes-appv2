import React from 'react';
import PropTypes from 'prop-types';

export function ArchiveButton({ isArchived, handleArchive, handleUnarchive }) {
  return (
    <button
      className="btn btn-primary btn-sm me-3"
      onClick={isArchived ? handleUnarchive : handleArchive}
    >
      <i
        className={`fa-solid ${isArchived ? 'fa-box-open' : 'fa-box-archive'}`}
      ></i>
      {isArchived ? ' Unarchive' : ' Archive'}
    </button>
  );
}

ArchiveButton.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleUnarchive: PropTypes.func.isRequired,
};
