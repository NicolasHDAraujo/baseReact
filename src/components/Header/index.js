//instalar o react-icons
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector (state => state.example.botaoClicado); //utilizando o reducer

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
        <Link to="/login">
      <FaUserAlt size={24} />
        </Link>
      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
    </ Nav>
  )
}
