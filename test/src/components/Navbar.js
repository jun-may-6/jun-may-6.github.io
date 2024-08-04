// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 10px;
  color: white;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
    </Nav>
  );
};

export default Navbar;
