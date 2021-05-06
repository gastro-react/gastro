import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  transition: all .2s ease-in-out;
`

const Icon = ({ width, height, color = '#0a0a0b', background = '#FFFF00' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={width}
    height={height}
  >
    <circle cx="20" cy="20" r="19" fill={background} stroke={color} strokeWidth="2"/>
    <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M10 9H13V12H10V9ZM27 12H24V15H21H19H16V12L13 12V15H10V17H8L8 15V12H5V15V17V20V23H8V25H10V28H8V31H10V28H13V25H16H19H21H24H27V28H30V31H32V28H30V25H32V23H35V20V17V15V12H32V15V17H30V15H27V12ZM27 12V9H30V12L27 12ZM27 20V17H24V20H27ZM16 17V20H13V17H16Z" />
  </Svg>
)

Icon.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Icon;
