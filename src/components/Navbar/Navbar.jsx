import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import HomeIcon from 'images/icons/Home.js';
import RoomsIcon from 'images/icons/Rooms';
import UsageIcon from 'images/icons/Usage';
import RulesIcon from 'images/icons/Rules';
import EventsIcon from 'images/icons/Events';

import { tLabel_s2_n } from 'style/typography';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 9999;
  height: 60px;
  background: ${({ theme }) => theme.cPrimary_925};
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      ${tLabel_s2_n};
      text-align: center;
      color: ${({ theme }) => theme.cPrimary_600};

      a {
        color: ${({ theme }) => theme.cPrimary_600};
      }

      .navIcon {
        display: block;
        width: 100%;
        height: 24px;
        margin: 0 auto;
        margin-bottom: 5px;
      }

      .active {
          color: ${({ theme }) => theme.cPrimary_100};
      }
    }
  }
`;

export const Navbar = () => (
  <Nav>
    <ul>
      <li><NavLink exact to='/'>
        <HomeIcon className='navIcon' width='24px' height='24px' />
        Home
      </NavLink></li>
      <li><NavLink to='/rooms'>
        <RoomsIcon className='navIcon' width='24px' height='24px' />
        Rooms
      </NavLink></li>
      <li><NavLink to='/usage'>
        <UsageIcon className='navIcon' width='24px' height='24px' />
        Usage
      </NavLink></li>
      <li><NavLink to='/rules'>
        <RulesIcon className='navIcon' width='24px' height='24px' />
        Rules
      </NavLink></li>
      <li><NavLink to='/events'>
        <EventsIcon className='navIcon' width='24px' height='24px' />
        Events
      </NavLink></li>
    </ul>
  </Nav>
)