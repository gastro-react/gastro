import ListErrors from './ListErrors'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_PAGE_UNLOADED } from '../utils/constants/actionTypes'
import { login } from '../services/actions/login'
import {
  FormPage,
  FormPageTitle,
  FormPageSubtitle,
  SubtitleLink,
  Form,
  FormFieldSet,
  InputElement,
  SubmitButton,
} from '../ui/formPage'

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
    <FormPage>
      <FormPageTitle>Sign In</FormPageTitle>
      <FormPageSubtitle>
        <SubtitleLink to="/register">Need an account?</SubtitleLink>
      </FormPageSubtitle>
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
    </FormPage>
  )
}

export default Login
