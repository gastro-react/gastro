import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SuisseNormalMediumText } from '../ui'
import { useTranslation } from 'react-i18next'

const StyledLink = styled(SuisseNormalMediumText)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textPrimary};
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
  const { t } = useTranslation()
  return (
    <StyledLink as={Link} to={link}>
      {icon}
      {t(text)}
    </StyledLink>
  )
}

NavLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
}

export default NavLink
