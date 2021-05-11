
import React, {useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import { CookIcon } from './AvatarIcons/index'
import { loggedInNavigation, loggedOutNavigation } from '../utils/navigationconfig'

import i18n from '../i18n';
import { useTranslation, Trans } from 'react-i18next';

import {
	HomeIcon,
	EditIcon,
	SettingsIcon,
	LoginIcon,
} from '../components/Icons/index'





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
const LogoLink = styled(Link)`
  flex-basis: 30%;
  font-family: 'Spectral', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #000;
  
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



const Navigation = ({currentUser}) => {
  let navItems;
  
	const { t, i18n } = useTranslation();

	const loggedInNavigation = [
		{
			id: 'navigation-main',
			link: '/',
			text:t('description.navHome'),
			icon: <HomeIcon />
		},
		{
			id: 'navigation-new_post',
			link: '/editor',
			text: t('description.navNewPost'),
			icon: <EditIcon />
		},
		{
			id: 'navigation-settings',
			link: '/settings',
			text: t('description.navSettings'),
			icon: <SettingsIcon />
		},
	]

	const loggedOutNavigation = [
		{
			id: 'navigation-main',
			link: '/',
			text: t('description.navHome'),
			icon: <HomeIcon />
		},
		{
			id: 'navigation-login',
			link: '/login',
			text: t('description.navLogin'),
			icon: <LoginIcon />
		},
	]

	console.log ('+++++++++',loggedInNavigation);
	console.log ('++++++++',loggedOutNavigation);
	
	if (currentUser) {
    navItems = [...loggedInNavigation,
      {
        id: 'navigation-user',
        link: `/@${currentUser.username}`,
        text: currentUser.username,
        icon: <CookIcon width="24px" height="24px" />
      },
    ]
  } else {
    navItems = [...loggedOutNavigation]
  }

    return (
      <StyledUl>
        {
        navItems.map(({id, link, text, icon}) => (
          <li key={id}>
            <NavLink link={link} text={text} icon={icon} />
          </li>
        ))
        }
      </StyledUl>
    );
};

const Header = ({currentUser, appName}) => {
	
	const { t, i18n } = useTranslation();
	
	const lngs = {
		en: { nativeName: 'English' },
		ru: { nativeName: 'Русский' }
	};
	
		console.log('!!!!!!!', i18n.language)
	
	
	return (
    <StyledHeader>
      <NavBar>
        <LogoLink to="/" >
          {appName.toLowerCase()}
        </LogoLink>
        <Navigation currentUser={currentUser} />
      </NavBar>
			<div>
				{Object.keys(lngs).map((lng) => (
					<button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
						{lngs[lng].nativeName}
					</button>
				))}
			</div>
    </StyledHeader>
	
  );
}

export default Header;
