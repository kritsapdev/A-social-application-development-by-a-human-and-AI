import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f8f;
  padding: 10px;
  margin-bottom: 20px;
`;

function Navigation() {
  return (
    <Nav>
      <Link to="/" className="btn btn-link">Home</Link>
      <Link to="/news-feed" className="btn btn-link">News Feed</Link>
      <Link to="/login" className="btn btn-link">Login</Link>
      <Link to="/register" className="btn btn-link">Register</Link>
    </Nav>
  );
}

export default Navigation;