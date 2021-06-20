import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  stroke: ${(p) => p.theme.colors.textPrimary};
  transition: all 0.2s ease-in-out;
  transform: ${(props) =>
    props.direction === 'left' ? 'rotate(180deg)' : props.direction === 'down' ? 'rotate(90deg)' : 'none'};
`

const ChevronIcon = ({ direction = 'right', width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    direction={direction}
    width={width}
    height={height}
    fill="none"
  >
    <path d="M13 17L18 12L13 7" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 17L11 12L6 7" strokeWidth="2" strokeLinecap="round" />
  </Svg>
)

ChevronIcon.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default ChevronIcon
