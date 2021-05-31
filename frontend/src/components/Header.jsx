import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavLink from './NavLink'
import { CookIcon } from './AvatarIcons/index'
import { SpectralBoldMediumText } from '../ui'
import {
  loggedInNavigation,
  loggedOutNavigation,
} from '../utils/navigationconfig'
import ThemeToggler from './ThemeToggler'

const StyledHeader = styled.header`
  box-sizing: border-box;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  padding: 0;
`
const NavBar = styled.nav`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`
const LogoLink = styled(SpectralBoldMediumText)`
  flex-basis: 30%;
  text-decoration: none;
  color: ${(p) => p.theme.colors.textPrimary};

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
const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
`

const Navigation = ({ currentUser }) => {
  let navItems

  if (currentUser) {
    navItems = [
      ...loggedInNavigation,
      {
        id: 'navigation-user',
        link: `/@${currentUser.username}`,
        text: currentUser.username,
        icon: <CookIcon width="24px" height="24px" />,
      },
    ]
  } else {
    navItems = [...loggedOutNavigation]
  }

  return (
    <StyledUl>
      {navItems.map(({ id, link, text, icon }) => (
        <li key={id}>
          <NavLink link={link} text={text} icon={icon} />
        </li>
      ))}
    </StyledUl>
  )
}

const Header = () => {
  const { currentUser, appName } = useSelector((state) => state.common)
  return (
    <StyledHeader>
      <NavBar>
        <LogoLink as={Link} to="/">
          {appName.toLowerCase()}
        </LogoLink>
        <ThemeToggler />
        <Navigation currentUser={currentUser} />
      </NavBar>
    </StyledHeader>
  )
}

export default Header
