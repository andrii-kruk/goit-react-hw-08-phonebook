import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 12px;

  background-color: rgb(68, 125, 230);
  -webkit-box-shadow: 13px -22px 64px -1px rgba(61, 61, 76, 1);
  -moz-box-shadow: 13px -22px 64px -1px rgba(61, 61, 76, 1);
  box-shadow: 13px -22px 64px -1px rgba(61, 61, 76, 1);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;

  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #ffffff;
  transition: 250ms;

  &.active {
    color: #3b3b3b;
  }
  &:hover {
    color: #3b3b3b;
  }
`;

export const StyledProfileLink = styled(Link)`
  display: inline-block;

  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #ffffff;
  transition: 250ms;

  &:hover {
    color: darkslateblue;
  }
`;
