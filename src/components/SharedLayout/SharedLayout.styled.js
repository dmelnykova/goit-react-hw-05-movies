import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div``;

export const Header = styled.header`
  height: 78px;
  background-color: #000000;
  border-bottom: 4px solid #ADD8E6;
  padding-left: 60px;
  padding-top: 16px;
  margin-bottom: 16px;
`;

export const ListNav = styled.ul`
  display: flex;
  gap: 36px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 32px;
  font-weight: 700;

  &.active {
    color: #ADD8E6;
  }
`;