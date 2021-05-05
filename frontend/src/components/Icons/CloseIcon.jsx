import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
`

const CloseIcon = ({ width, height, color = '#0a0a0b' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
)

CloseIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default CloseIcon;
