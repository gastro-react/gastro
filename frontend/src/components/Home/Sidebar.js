import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Tags from './Tags'

const SidebarWrap = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 25%;
  padding: 16px;
  height: fit-content;
  background-color: ${(p) => p.theme.colors.articleBackground};
  border-radius: 12px;
`
const SidebarTitle = styled.p`
  font-family: source sans pro, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textPrimary};
`

const Sidebar = () => {
  const { t } = useTranslation()
  return (
    <SidebarWrap>
      <SidebarTitle>{t('pages.sidebar')}</SidebarTitle>
      <Tags />
    </SidebarWrap>
  )
}

export default Sidebar
