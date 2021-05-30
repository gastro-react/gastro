import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(p) => (getTheme(p).colors.background)}
  }
`
export const LightTheme = {
  colors: {
    background: '#fff',
    sectionBackground: '#1c1c22',
    articleBackground: '#f4f4f4',
    textPrimary: '#000',
    textSecondary: '#aaa',
    sectionTitle: '#ffff00',
    sectionSubtitle: '#fff',
    border: '#e0e0e0',
    chosen: '#ff0'
  },
}
export const DarkTheme = {
  colors: {
    background: '#1c1c22',
    sectionBackground: '#000',
    articleBackground: '#2d2d2d',
    textPrimary: '#fff',
    textSecondary: '#9c9b9b',
    sectionTitle: '#ffff00',
    sectionSubtitle: '#fff',
    border: '#e0e0e0',
    chosen: '#676700'
  },
}

export const getTheme = props => props.theme