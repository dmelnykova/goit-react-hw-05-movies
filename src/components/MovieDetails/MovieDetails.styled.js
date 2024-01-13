import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  width: 110px;
  height: 40px;
  margin-top: 14px;
  margin-bottom: 18px;
  margin-left: 60px;
  font-weight: 700;
  background-color: #ffec80;
  border-color: #ffe866;
  border-radius: 15px;
  cursor: pointer;
`;

export const Layout = styled.div`
  padding: 10px;
  padding-left: 80px;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  width: 700px;
  font-size: 20px;
  margin-bottom: 26px;
`;

export const SubTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 20px;
`;

export const SubWrapper = styled.div`
  padding: 22px 70px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin-left: 18px;
  margin-right: 20px;
  color: #111;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
`;