import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  archiveNote,
  unarchiveNote,
  deleteNote,
  getNote,
} from '../../utils/local-data';
import { showFormattedDate } from '../../utils/formatDate';
import {
  showSuccessMessage,
  showDeleteConfirmation,
  showArchiveConfirmation,
  showUnarchiveConfirmation,
} from '../../utils/sweetalert';
import { ArchiveButton, DeleteButton } from '../index';

export function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);
  const isArchived = note.archived;

  const handleArchive = () => {
    showArchiveConfirmation().then((result) => {
      if (result.isConfirmed) {
        archiveNote(id);
        showSuccessMessage('Your file has been archived').then(() => {
          navigate('/');
        });
      }
    });
  };

  const handleUnarchive = () => {
    showUnarchiveConfirmation().then((result) => {
      if (result.isConfirmed) {
        unarchiveNote(id);
        if (note.archived) {
          navigate('/archive');
        } else {
          navigate('/');
        }
        showSuccessMessage('Your file has been unarchived.');
      }
    });
  };

  const handleDelete = () => {
    showDeleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        if (note.archived) {
          navigate('/archive');
        } else {
          navigate('/');
        }
        showSuccessMessage('Your file has been deleted.');
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 col-lg-9 m-2">
          <h1 className="card-title">{note.title}</h1>
          <h6 className="card-subtitle mb-2 text-muted">
            {showFormattedDate(note.createdAt)}
          </h6>
          <p className="card-text fs-5">{note.body}</p>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-lg-9">
          <ArchiveButton
            isArchived={isArchived}
            handleArchive={handleArchive}
            handleUnarchive={handleUnarchive}
          />
          <DeleteButton handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
