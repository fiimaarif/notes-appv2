import React from 'react';
import { CardNote } from '../CardNote';
import { getArchivedNotes, getActiveNotes } from '../../utils/local-data';
import { EmptyNote } from '../EmptyNote';
import PropTypes from 'prop-types';

export function ArchiveNote({ isArchive = true }) {
  const notes = isArchive ? getArchivedNotes() : getActiveNotes();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h4 className="mt-2 ms-3">Archive</h4>
          {notes.length > 0 ? (
            <CardNote noteList={notes} />
          ) : (
            <EmptyNote isArchive={isArchive} />
          )}
        </div>
      </div>
    </div>
  );
}

ArchiveNote.propTypes = {
  isArchive: PropTypes.bool,
};
