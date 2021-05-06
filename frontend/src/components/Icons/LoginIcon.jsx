import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
`

const LoginIcon = ({ width, height, color = '#0a0a0b' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
  >
    <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 17L15 12M15 12L10 7M15 12H3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
)

LoginIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default LoginIcon;
