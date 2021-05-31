import styled from 'styled-components'

export const Tag = styled.a`
  text-decoration: none;
  background-color: ${(p) =>
    p.chosen ? p.theme.colors.chosen : p.theme.colors.articleBackground};
  border: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  border-radius: 100px;
  padding: 8px;
  color: ${(p) => p.theme.colors.textPrimary};
  transition: background-color 0.3s linear;

  &:hover {
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
