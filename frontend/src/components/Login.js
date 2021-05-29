import { Link } from 'react-router-dom'
import ListErrors from './ListErrors'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_PAGE_UNLOADED } from '../utils/constants/actionTypes'
import { login } from '../services/actions/login'
import styled from 'styled-components/macro'

export const AuthPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
	border: 1px solid saddlebrown;
`
const AuthPageTitle = styled.h1`
  font-family: Spectral, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #0a0a0b;
  margin-top: 48px;
`
const AuthPageSubtitle = styled.p`
  font-family: Suisse, sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0a0a0b;
  margin-top: 40px;
`
const SubtitleLink = styled(Link)`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: #0a0a0b;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
`

const FormFieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 16px;
`

const InputElement = styled.input`
  width: 540px;
  height: 40px;
  background: #f4f4f6;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 0;

  &::placeholder {
    font-family: Suisse, sans-serif;
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 24px;
    color: #62626a;
    padding-left: 20px;
  }
`

const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  background: #ffff00;
  border-radius: 20px;
  border: none;
  padding: 0;
  align-self: flex-end;
  margin-top: 8px;
`

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const changeEmail = (ev) => setEmail(ev.target.value)
  const changePassword = (ev) => setPassword(ev.target.value)
  const submitForm = (email, password) => (ev) => {
    ev.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    return () => dispatch({ type: LOGIN_PAGE_UNLOADED })
  }, [])

  return (
    <AuthPage>
      <AuthPageTitle>Sign In</AuthPageTitle>
      <AuthPageSubtitle>
        <SubtitleLink to="/register">Need an account?</SubtitleLink>
      </AuthPageSubtitle>
      <ListErrors errors={auth.errors} />
      <Form onSubmit={submitForm(email, password)}>
        <FormFieldSet>
          <InputElement
            type="email"
            placeholder="Email"
            value={email || ''}
            onChange={changeEmail}
          />
        </FormFieldSet>
        <FormFieldSet>
          <InputElement
            type="password"
            placeholder="Password"
            value={password || ''}
            onChange={changePassword}
          />
        </FormFieldSet>
        <SubmitButton type="submit" disabled={auth.inProgress}>
          Sign in
        </SubmitButton>
      </Form>
    </AuthPage>
  )
}

export default Login
