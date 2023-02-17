import React from 'react';
import { CardNote } from '../CardNote';
import { getActiveNotes, getArchivedNotes } from '../../utils/local-data';
import { EmptyNote } from '../EmptyNote';
import PropTypes from 'prop-types';

export function NoteList({ isArchive = false }) {
  const notes = isArchive ? getArchivedNotes() : getActiveNotes();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h4 className="mt-2 ms-3">Notes</h4>
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

NoteList.propTypes = {
  isArchive: PropTypes.bool,
};
