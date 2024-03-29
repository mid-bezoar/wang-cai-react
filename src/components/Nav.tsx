import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #fff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.select {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to='/tags' activeClassName='select'>
            <Icon name='tag' />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to='/money' activeClassName='select'>
            <Icon name='money' />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to='/statistics' activeClassName='select'>
            <Icon name='chart' />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
