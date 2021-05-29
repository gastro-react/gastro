import styled from 'styled-components';

export const Tag = styled.a`
  text-decoration: none;
  background: ${({ chosen }) => (chosen ? '#ff0' : '#f4f4f4')};
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  border-radius: 100px;
  padding: 8px;
  color: #000;
  transition: background-color 0.3s linear;

  &:hover {
    color: inherit;
    transform: scale(1.1);
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`
