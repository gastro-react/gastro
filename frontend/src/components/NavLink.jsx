import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  font-family: 'Suisse Intl', sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 20px;
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
    <StyledLink to={link}>
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
