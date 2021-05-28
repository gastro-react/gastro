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
      d="M25.0715 10.7489C25.673 10.5374 26.3018 10.4317 26.9853 10.4317C30.2934 10.4317 32.9727 13.022 33 16.2203C33 19.1013 30.8128 21.4802 27.9695 21.9295V26H12.0305V21.9295C9.18717 21.4802 7 19.1013 7 16.2203C7 13.022 9.67928 10.4317 12.9874 10.4317C13.6435 10.4317 14.2997 10.5374 14.9012 10.7489C15.9674 9.11013 17.8265 8 19.9863 8C22.1462 8 24.0053 9.11013 25.0715 10.7489ZM12 30.9934V28H28V30.9934C28 31.5497 27.5334 32 26.9571 32H13.0429C12.4666 32 12 31.5497 12 30.9934Z"
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
