import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { SpectralBoldExtraLargeText, SpectralBoldMediumText } from '../../ui'

const Section = styled.section`
  background-color: ${(p) => p.theme.colors.sectionBackground};
`
const StyledBanner = styled.div`
  margin: 0 auto;
  padding: 32px;
  text-align: center;
`
const Title = styled(SpectralBoldExtraLargeText)`
  text-align: center;
  color: ${(p) => p.theme.colors.sectionTitle};
  margin-bottom: 8px;
`
const SubTitle = styled(SpectralBoldMediumText)`
  text-align: center;
  color: ${(p) => p.theme.colors.sectionSubtitle};
`

const Banner = () => {
  const { t } = useTranslation();
  const { appName } = useSelector((state) => state.common)

  return (
    <Section>
      <StyledBanner>
        <Title as="h1">{appName.toLowerCase()}</Title>
        <SubTitle>{t('pages.banner.subtitle')}</SubTitle>
      </StyledBanner>
    </Section>
  )
}

export default Banner
