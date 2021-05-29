import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  SpectralBoldExtraLargeText,
  SpectralBoldMediumText
} from '../UI'

const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  background-color: #1c1c22;
`
const StyledBanner = styled.div`
  margin: 0 auto;
  padding: 32px;
  text-align: center;
`
const Title = styled(SpectralBoldExtraLargeText)`
   text-align: center;
  color: #ffff00;
  margin-bottom: 8px;
`
const SubTitle = styled(SpectralBoldMediumText)`
  text-align: center;
  color: #fff;
`

const Banner = () => {
  const { appName } = useSelector((state) => state.common)
  const subtitle = 'the new experience is cooked here...' // delete hardcode!!

  return (
    <Section>
      <StyledBanner>
        <Title as="h1">{appName.toLowerCase()}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </StyledBanner>
    </Section>
  )
}

export default Banner
