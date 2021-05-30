import styled from 'styled-components'

const SpectralText = styled.p`
  font-family: 'Spectral', serif;
  font-style: normal;
  letter-spacing: 0;
`
const SuisseText = styled.p`
  font-family: 'Suisse Intl', sans-serif;
  font-style: normal;
  letter-spacing: 0;
`
export const SpectralBoldMediumText = styled(SpectralText)`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
`
export const SpectralBoldLargeText = styled(SpectralText)`
  font-weight: normal;
  font-size: 40px;
  line-height: 40px;
`
export const SpectralBoldExtraLargeText = styled(SpectralText)`
  font-weight: normal;
  font-size: 64px;
  line-height: 64px;
`
export const SuisseNormalMediumText = styled(SuisseText)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`


