import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  stroke: ${p => p.theme.colors.textPrimary};
  transition: all 0.2s ease-in-out;
`

const HomeIcon = ({ width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={width}
    height={height}
  >
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 22V12H15V22"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
)

HomeIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default HomeIcon
