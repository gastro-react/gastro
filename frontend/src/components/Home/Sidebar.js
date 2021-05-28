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
  background-color: #f4f4f4;
  border-radius: 12px;
`
const SidebarTitle = styled.p`
  font-family: source sans pro, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #373a3c;
`

const Sidebar = () => (
  <SidebarWrap>
    <SidebarTitle>Popular Tags</SidebarTitle>
    <Tags />
  </SidebarWrap>
)

export default Sidebar
