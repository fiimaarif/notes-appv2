import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, DetailPage, AddNotePage } from './pages';
import { ArchivePage } from './pages/ArchivePage';
import { NotFoundPage } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<AddNotePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
