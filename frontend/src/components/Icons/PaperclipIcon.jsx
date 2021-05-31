import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  stroke: ${(p) => p.theme.colors.textPrimary};
  transition: fill 0.2s ease-in-out;
`

const PaperclipIcon = ({ width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      d="M21.44 11.0499L12.25 20.2399C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.2399C2.63416 19.1141 2.00166 17.5871 2.00166 15.9949C2.00166 14.4027 2.63416 12.8758 3.76 11.7499L12.95 2.55992C13.7006 1.80936 14.7185 1.3877 15.78 1.3877C16.8415 1.3877 17.8594 1.80936 18.61 2.55992C19.3606 3.31048 19.7822 4.32846 19.7822 5.38992C19.7822 6.45138 19.3606 7.46936 18.61 8.21992L9.41 17.4099C9.03472 17.7852 8.52573 17.996 7.995 17.996C7.46427 17.996 6.95528 17.7852 6.58 17.4099C6.20472 17.0346 5.99389 16.5256 5.99389 15.9949C5.99389 15.4642 6.20472 14.9552 6.58 14.5799L15.07 6.09992"
    />
  </Svg>
)

PaperclipIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default PaperclipIcon
