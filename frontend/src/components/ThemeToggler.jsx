import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_THEME } from '../utils/constants/actionTypes'
import { MoonIcon, SunIcon } from './Icons'

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-center;
`

const Switch = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${p => p.theme.colors.articleBackground};
  border: 2px solid ${p => p.theme.colors.border};
  display: flex;
  padding: 0 3px;
  align-items: center;
  justify-content: ${p => p.activeTheme === 'light' ? 'flex-start' : 'flex-end'};
`
const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state)

  const toggleTheme = (e) => {
    e.preventDefault();
    dispatch({ type: TOGGLE_THEME });
  }

  return (
    <Wrapper onClick={toggleTheme}>
      <Switch activeTheme={theme.active} >
        { theme.active === 'light'
          ? <MoonIcon />
          : <SunIcon />
        }
      </Switch>
    </Wrapper>
  )
}

export default ThemeToggler
