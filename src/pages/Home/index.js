import React from 'react';
import { ButtonAdd, Navbar, NoteList } from '../../components';

export function Home() {
  return (
    <div>
      <Navbar />
      <NoteList />
      <ButtonAdd />
    </div>
  );
}
