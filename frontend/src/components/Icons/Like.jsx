import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(p) => p.width || '24px'};
  height: ${(p) => p.height || '24px'};
  fill: ${(p) => (p.liked ? p.theme.colors.textPrimary : 'none')};
  stroke: ${(p) => p.theme.colors.textPrimary};
  transition: fill 0.2s ease-in-out;
`

const LikeIcon = ({ liked, width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    liked={liked}
    width={width}
    height={height}
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      d="M20.1327 5.31877L20.1331 5.3191C20.5511 5.73699 20.8828 6.23316 21.1091 6.77926C21.3354 7.32537 21.4518 7.9107 21.4518 8.50183C21.4518 9.09295 21.3354 9.67828 21.1091 10.2244C20.8828 10.7705 20.5511 11.2667 20.1331 11.6846L20.1329 11.6847L19.0729 12.7447L12 19.8176L4.9271 12.7447L3.8671 11.6847C3.02295 10.8406 2.54871 9.69564 2.54871 8.50183C2.54871 7.30801 3.02295 6.16309 3.8671 5.31893C4.71126 4.47478 5.85618 4.00053 7.05 4.00053C8.24381 4.00053 9.38873 4.47478 10.2329 5.31893L11.2929 6.37893L12 7.08604L12.7071 6.37893L13.7671 5.31893L13.7673 5.31877C14.1852 4.90068 14.6813 4.56902 15.2274 4.34274C15.7735 4.11647 16.3589 4 16.95 4C17.5411 4 18.1265 4.11647 18.6726 4.34274C19.2187 4.56902 19.7148 4.90068 20.1327 5.31877Z"
    />
  </Svg>
)

LikeIcon.propTypes = {
  color: PropTypes.string,
  liked: PropTypes.bool.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default LikeIcon
