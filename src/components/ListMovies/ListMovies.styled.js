import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  font-size: 18px;
  margin-top: 30px;
`;

export const Item = styled.li`
  max-width: 250px;
  margin-bottom: 18px;
`;

export const Title = styled.p`
  text-decoration: none;
  font-size: 16px;
  margin-top: 12px;
  color: #111;
  font-weight: 500;
  text-align: center;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  max-width: 250px;
`;
