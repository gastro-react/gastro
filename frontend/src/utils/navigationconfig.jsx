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
    text: 'navigation.main',
    icon: <HomeIcon />,
  },
  {
    id: 'navigation-new_post',
    link: '/editor',
    text: 'navigation.newPost',
    icon: <EditIcon />,
  },
  {
    id: 'navigation-settings',
    link: '/settings',
    text: 'navigation.settings',
    icon: <SettingsIcon />,
  },
]

const loggedOutNavigation = [
  {
    id: 'navigation-main',
    link: '/',
    text: 'navigation.main',
    icon: <HomeIcon />,
  },
  {
    id: 'navigation-login',
    link: '/login',
    text: 'navigation.login',
    icon: <LoginIcon />,
  },
]

export { loggedInNavigation, loggedOutNavigation }
