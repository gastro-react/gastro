import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SuisseNormalMediumText } from './UI';

const StyledLink = styled(SuisseNormalMediumText)`
  text-decoration: none;
  color: #000;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
  &:active {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`

const NavLink = ({ link, text, icon }) => {
  return (
    <StyledLink as={Link} to={link}>
      {icon}
      {text}
    </StyledLink>
  )
}

NavLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
}

export default NavLink
