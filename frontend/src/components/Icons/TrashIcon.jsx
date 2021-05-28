import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  transition: all 0.2s ease-in-out;
`

const TrashIcon = ({ width, height, color = '#0a0a0b' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={width}
    height={height}
  >
    <path stroke={color} strokeWidth="2" strokeLinecap="round" d="M3 6H5H21" />
    <path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
    />
    <path stroke={color} strokeWidth="2" strokeLinecap="round" d="M10 11V17" />
    <path stroke={color} strokeWidth="2" strokeLinecap="round" d="M14 11V17" />
  </Svg>
)

TrashIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default TrashIcon
