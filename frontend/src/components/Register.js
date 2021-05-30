import ListErrors from './ListErrors'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { REGISTER_PAGE_UNLOADED } from '../utils/constants/actionTypes'
import { register } from '../services/actions/register'
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

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const changeEmail = (ev) => setEmail(ev.target.value)
  const changePassword = (ev) => setPassword(ev.target.value)
  const changeUsername = (ev) => setUsername(ev.target.value)
  const submitForm = (username, email, password) => (ev) => {
    ev.preventDefault()
    dispatch(register(username, email, password))
  }

  useEffect(() => {
    return () => dispatch({ type: REGISTER_PAGE_UNLOADED })
  }, [])

  return (
    <FormPage>
      <FormPageTitle>Sign Up</FormPageTitle>
      <FormPageSubtitle>
        <SubtitleLink to="/login">Have an account?</SubtitleLink>
      </FormPageSubtitle>
      <ListErrors errors={auth.errors} />
      <Form onSubmit={submitForm(username, email, password)}>
        <FormFieldSet>
          <InputElement
            type="text"
            placeholder="Username"
            value={username}
            onChange={changeUsername}
          />
        </FormFieldSet>
        <FormFieldSet>
          <InputElement
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeEmail}
          />
        </FormFieldSet>
        <FormFieldSet>
          <InputElement
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
          />
        </FormFieldSet>
        <SubmitButton type="submit" disabled={auth.inProgress}>
          Sign up
        </SubmitButton>
      </Form>
    </FormPage>
  )
}

export default Register
