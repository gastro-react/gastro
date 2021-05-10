import {
  HomeIcon,
  EditIcon,
  SettingsIcon,
  LoginIcon,
} from '../components/Icons/index'
import React, {useState, useEffect} from 'react';
import { useTranslation, Trans } from 'react-i18next';


const NavigationConfig = () => {
	const { t, i18n } = useTranslation();
	const [loggedInNavigation , setLoggedInNavigation] = useState([])
	const [loggedOutNavigation , setLoggedOutNavigation] = useState([])

	useEffect(() => {
		setLoggedInNavigation ([
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
			}
		])
		
		setLoggedOutNavigation([
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
		])
		
	}, [])
}


export default NavigationConfig
