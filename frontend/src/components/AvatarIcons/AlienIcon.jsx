import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '40px'};
  height: ${(props) => props.height || '40px'};
  transition: all 0.2s ease-in-out;
`

const Icon = ({ width, height, color = '#0a0a0b', background = '#FFFF00' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={width}
    height={height}
  >
    <circle
      cx="20"
      cy="20"
      r="19"
      fill={background}
      stroke={color}
      strokeWidth="2"
    />
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16.835C8 24.0379 14.3721 34 20 34C25.2982 34 32 24.0379 32 16.835C32 9.63213 26.6274 6 20 6C13.3725 6 8 9.63213 8 16.835ZM23.1178 22.1612C24.583 20.8126 26.6273 20.3222 28.514 20.6892C28.9127 22.4257 28.3799 24.3071 26.9147 25.6556C25.4494 27.0042 23.4052 27.4946 21.5185 27.1276C21.1197 25.3911 21.6526 23.5097 23.1178 22.1612ZM11.486 20.6892C13.3727 20.3222 15.4169 20.8126 16.8821 22.1611C18.3473 23.5097 18.8802 25.3911 18.4814 27.1276C16.5947 27.4945 14.5505 27.0041 13.0853 25.6556C11.6201 24.307 11.0872 22.4256 11.486 20.6892Z"
    />
  </Svg>
)

Icon.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Icon
