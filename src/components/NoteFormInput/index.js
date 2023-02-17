import React, { useState } from 'react';
import { showFormattedDate } from '../../utils/formatDate';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../../utils/local-data';
import { showSuccessMessage } from '../../utils/sweetalert';

export function NoteFormInput() {
  const currentDate = showFormattedDate(new Date());
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({
      title,
      body,
    });
    showSuccessMessage('Note added');
    navigate('/');
  };

  return (
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-md-9 col-lg-9">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2 col-lg-2">
            <Link to="/">
              <i
                className="fa-solid fa-arrow-left-long ms-4 mb-5"
                title="back"
              ></i>
            </Link>
          </div>
          <div className="col-2 col-lg-2">
            <i
              className="fa-regular fa-circle-check me-4 mb-5"
              title="save"
              onClick={handleSubmit}
            ></i>
          </div>
        </div>
        <p className="text-muted ms-4">{currentDate}</p>
        <form id="form-note" className="mb-3 p-2 ">
          <input
            type="text"
            className="form-control shadow-none no-border"
            id="exampleFormControlInput1"
            placeholder="notes title..."
            maxLength="50"
            value={title}
            onChange={handleTitleChange}
          />
          <div className="mb-3">
            <textarea
              className="form-control shadow-none"
              id="exampleFormControlTextarea1"
              placeholder="input notes..."
              rows="3"
              value={body}
              onChange={handleBodyChange}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
