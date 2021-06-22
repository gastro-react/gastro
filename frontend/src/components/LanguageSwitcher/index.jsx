import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ChevronIcon } from '../Icons'
import { SuisseNormalMediumText } from '../../ui'

const LanguageSwitcher = styled(SuisseNormalMediumText)`
  position: relative;
  display: flex;
  gap: 4px;
  padding: 0 4px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  font-family: 'Suisse Intl', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.textPrimary};
  cursor: pointer;
`
const DropDownMenu = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;

  bottom: -240%;
  left: 0;
  width: 100%;
`
const Button = styled(SuisseNormalMediumText)`
  width: 40px;
  border: 1px solid #e0e0e0;
  color: #000;
  text-decoration: none;
  background-color: ${(p) => (p.active ? '#ff0' : '#f4f4f4')};
  font-weight: ${(p) => (p.active ? 'bold' : 'normal')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 4px;
  transition: background-color 0.3s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
const langs = {
  en: { nativeName: 'EN' },
  ru: { nativeName: 'RU' },
}

export default () => {
  const [dropped, setDropped] = useState(false)
  const { i18n } = useTranslation()
  const handleSubmit = (e, lng) => {
    e.preventDefault()
    i18n.changeLanguage(lng)
  }

  return (
    <LanguageSwitcher as="div" onClick={() => setDropped(!dropped)}>
      {dropped ? null : langs[i18n.language].nativeName}
      <ChevronIcon direction={dropped ? 'right' : 'down'} />

      {dropped && (
        <DropDownMenu>
          {Object.keys(langs).map((lng) => (
            <Button
              as="a"
              key={lng}
              type="submit"
              active={i18n.language === lng}
              onClick={(e) => handleSubmit(e, lng)}
            >
              {langs[lng].nativeName}
            </Button>
          ))}
        </DropDownMenu>
      )}
    </LanguageSwitcher>
  )
}
