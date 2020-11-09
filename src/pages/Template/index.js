import React from 'react';
import NavBar from '../NavBar';

export default function Template({ title, status }) {
  return (
    <>
      <NavBar />
      <p className="page-info">
        {title}:
    </p>
      <ul className={status}>
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
        <li>Tarefa 3</li>
      </ul>
    </>
  );
} 