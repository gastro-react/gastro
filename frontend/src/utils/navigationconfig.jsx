import {
  HomeIcon,
  EditIcon,
  SettingsIcon,
  LoginIcon,
} from '../components/Icons/index'
import React, {useState} from 'react';
// import i18n from 'i18n';
import i18n from '../i18n';

console.log('==================',i18n.t)
	const loggedInNavigation = [
		{
			id: 'navigation-main',
			link: '/',
			text:i18n.t('description.navHome'),
			icon: <HomeIcon />
		},
		{
			id: 'navigation-new_post',
			link: '/editor',
			text: i18n.t('description.navNewPost'),
			icon: <EditIcon />
		},
		{
			id: 'navigation-settings',
			link: '/settings',
			text: i18n.t('description.navSettings'),
			icon: <SettingsIcon />
		},
	]
	
	const loggedOutNavigation = [
		{
			id: 'navigation-main',
			link: '/',
			text: i18n.t('description.navHome'),
			icon: <HomeIcon />
		},
		{
			id: 'navigation-login',
			link: '/login',
			text: i18n.t('description.navLogin'),
			icon: <LoginIcon />
		},
	]
	export { loggedInNavigation, loggedOutNavigation }
	
	
// }


// export default NavigationConfig
