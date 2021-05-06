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
    <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M16 14C16 15.6569 14.6569 17 13 17C11.3431 17 10 15.6569 10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14ZM30 14C30 15.6569 28.6569 17 27 17C25.3431 17 24 15.6569 24 14C24 12.3431 25.3431 11 27 11C28.6569 11 30 12.3431 30 14ZM9.30739 22.2646C8.90124 21.5426 7.98667 21.2865 7.26463 21.6927C6.54259 22.0988 6.28651 23.0134 6.69266 23.7354C9.90566 29.4474 14.8586 32.5 20 32.5C25.1415 32.5 30.0944 29.4474 33.3074 23.7354C33.7135 23.0134 33.4575 22.0988 32.7354 21.6927C32.0134 21.2865 31.0988 21.5426 30.6927 22.2646C27.9057 27.2193 23.8586 29.5 20 29.5C16.1415 29.5 12.0944 27.2193 9.30739 22.2646Z" />

  </Svg>
)

Icon.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Icon;
