import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({}) {
  return (
    <div className='navbar'>
      <h3>Gerenciador de tarefas</h3>
      <Link to="/">Tarefas atuais</Link>
      <Link to="/completed">Tarefas Completadas</Link>
    </div>
  );
}