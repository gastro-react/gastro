import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  LikeIcon, 
  CloseIcon,
  EditIcon,
  SettingsIcon,
  TrashIcon,
  HomeIcon,
  ChevronIcon,
  CopyIcon, 
  PaperclipIcon,
  FollowIcon,
  UnfollowIcon,
  ThumbsIcon,
  FollowingIcon,
  LogoutIcon,
  LoginIcon,
} from './Icons/index';
import {SmileIcon, AlienIcon, InvadersIcon, CookIcon, DeveloperIcon} from './AvatarIcons/index'


const StyledLink = styled(Link)`
  color: red;
`

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home page
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className={styles.additional}>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <span>Hello, {props.currentUser.username}</span>
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav >
        <div >
          <LikeIcon liked="false" />
          <CloseIcon />
          <EditIcon />
          <SettingsIcon />
          <TrashIcon />
          <HomeIcon />
          <CopyIcon />
          <PaperclipIcon />
          <FollowIcon />
          <UnfollowIcon />
          <ThumbsIcon direction="up"/>
          <ThumbsIcon direction="down"/>
          <FollowingIcon />
          <LogoutIcon />
          <LoginIcon />
          <ChevronIcon direction="right"/>
          <ChevronIcon direction="left"/>
          <StyledLink to="/" >
            {this.props.appName.toLowerCase()}
          </StyledLink>


          <SmileIcon />
<AlienIcon /> 
<InvadersIcon />
<CookIcon />
<DeveloperIcon />
          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
