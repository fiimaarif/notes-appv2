import React from 'react';
import { ArchiveNote } from '../../components/ArchiveNote';
import { Navbar } from '../../components';

export function ArchivePage() {
  return (
    <div>
      <Navbar />
      <ArchiveNote />
    </div>
  );
}
