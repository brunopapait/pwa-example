import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({}) {
  console.log(window.location.pathname);
  return (
    <div className='navbar'>
      <h3>Gerenciador de tarefas</h3>
      <Link to="/" className={window.location.pathname == '/' ? 'active' : 'inactive'} >Tarefas atuais</Link>
      <Link to="/completed" className={window.location.pathname == '/completed' ? 'active' : 'inactive'}>Tarefas Completadas</Link>
    </div>
  );
}