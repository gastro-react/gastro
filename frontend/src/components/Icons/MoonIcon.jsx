import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  fill: ${p => p.theme.colors.textPrimary};
  transition: all 0.2s ease-in-out;
`

const MoonIcon = ({ width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2830 2830"
    fill="none"
    width={width}
    height={height}
  >
   <path d="M0 1429.5l0 35.5c0,740.1 658.2,1364.8 1427.3,1365 592,0.1 1067,-293.4 1319.5,-762.4 18.5,-34.4 83.7,-166.7 83.2,-202.4 -17.4,35.8 -247.1,168.3 -308.7,198.1 -932.8,451.2 -2100,-173.6 -2100.2,-1248.9 0,-153.1 30.5,-260.3 64.6,-395.7 -52.7,32.4 -139.8,131.2 -184.8,186 -179.1,217.7 -300.9,523.7 -300.9,824.8z"/>
   <path d="M823.2 658.8l41.4 17.3c17,4.6 31.2,8.5 47.8,13.2 73.3,20.8 214.4,51.7 257.7,94.9 65.2,65.1 79.7,239.7 126.3,330 38.9,-95 68,-274.8 128.5,-331.8 65.8,-62 276.9,-86.2 344.5,-120.5 -99.1,-44.8 -269.8,-52.9 -341.8,-119.9 -40.4,-37.6 -55.9,-91.3 -74.6,-152.8 -17.7,-58.2 -40.1,-121.5 -54.3,-179.5 -44.3,55.5 -53.8,248.7 -129.2,326.7 -49.9,51.7 -267.8,104.2 -346.3,122.4z"/>
   <path d="M1837.2 1204.8c55.4,31.9 182.2,37.5 228.8,82.8 35.2,34.3 61.7,160.6 83.6,221.8 33.2,-49.2 40.3,-171.5 84.5,-219.5 42.9,-46.5 175.3,-52.2 232.4,-85.1 -63.9,-38 -177.8,-34.3 -228.9,-82.6 -46.9,-44.3 -54.3,-171.7 -87.8,-222.4 -23.4,62.4 -44.7,179.5 -81.4,218.7 -48.7,52.1 -165.6,46.9 -231.2,86.3z"/>
   <path d="M1675.7 297.2c19.7,18.2 84,30.2 118.2,39.9 40.8,11.6 84,22.5 110.3,47.6 52.8,50.4 48.9,160.9 88,217.6 35.4,-61.1 37.6,-172.5 86.9,-218.8 49.6,-46.5 168.2,-49.5 230.7,-82.3 -67.1,-29.2 -179.2,-34.5 -229,-80.8 -55,-51.1 -51.9,-158.7 -88.6,-220.4 -32.6,44.6 -36.3,166 -85.7,217.2 -35.9,37.3 -170.4,66.8 -230.8,80z"/>
   <path d="M904.3 1154.9c-119.3,44.1 -57.3,210.9 66.8,172.8 112.6,-34.6 58,-218.9 -66.8,-172.8z"/>
   <path d="M1356.2 1701.1c-85.5,30.3 -30.4,135 41.2,107.9 63.3,-23.9 35.1,-135.1 -41.2,-107.9z"/>

  </Svg>
)

MoonIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

export default MoonIcon
