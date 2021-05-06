import {
  HomeIcon,
  EditIcon,
  SettingsIcon,
  LoginIcon,
} from '../components/Icons/index'

const loggedInNavigation = [
  {
    id: 'navigation-main',
    link: '/',
    text: 'Main',
    icon: <HomeIcon />
  },
  {
    id: 'navigation-new_post',
    link: '/',
    text: 'New post',
    icon: <EditIcon />
  },
  {
    id: 'navigation-settings',
    link: '/',
    text: 'Settings',
    icon: <SettingsIcon />
  },
]

const loggedOutNavigation = [
  {
    id: 'navigation-main',
    link: '/',
    text: 'Main',
    icon: <HomeIcon />
  },
  {
    id: 'navigation-login',
    link: '/',
    text: 'Login',
    icon: <LoginIcon />
  },
]

export { loggedInNavigation, loggedOutNavigation }
