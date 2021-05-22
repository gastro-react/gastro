import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

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
const Title = styled.h1`
  font-family: Spectral, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  color: #FFFF00;
  margin-bottom: 8px;
`
const SubTitle = styled.p`
  font-family: Spectral, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #fff;
`


const Banner = () => {
  const { appName } = useSelector(state => state.common)
  const subtitle = "the new experience is cooked here..."; // delete hardcode!!
  
  return (
    <Section>
      <StyledBanner>
        <Title>{appName.toLowerCase()}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </StyledBanner>
    </Section>
  )
}


export default Banner;
