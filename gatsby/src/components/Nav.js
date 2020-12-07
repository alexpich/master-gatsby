import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/logo_transparent.png';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    order: 1;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    &:hover {
      color: var(--grey);
    }
  }
  .logo {
    height: 100px;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/presets">Presets</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
