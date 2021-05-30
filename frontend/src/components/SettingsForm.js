import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Form,
  FormFieldSet,
  InputElement,
  SubmitButton,
  TextAreaElement,
} from '../ui/formPage'

function SettingsForm({ onSubmitForm }) {
  const { currentUser } = useSelector((state) => state.common)
  const settings = useSelector((state) => state.settings)

  const [state, setState] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  })

  const updateState = (field) => (ev) => {
    const newState = Object.assign({}, state, { [field]: ev.target.value })
    setState(newState)
  }

  const submitForm = (ev) => {
    ev.preventDefault()
    const user = Object.assign({}, state)
    if (!user.password) {
      delete user.password
    }
    onSubmitForm(user)
  }

  useEffect(() => {
    if (currentUser) {
      Object.assign(state, {
        image: currentUser.image || '',
        username: currentUser.username,
        bio: currentUser.bio,
        email: currentUser.email,
      })
    }
  }, [currentUser])

  return (
    <Form onSubmit={submitForm}>
      <FormFieldSet>
        <InputElement
          type="text"
          placeholder="URL of profile picture"
          value={state.image}
          onChange={updateState('image')}
        />
      </FormFieldSet>
      <FormFieldSet>
        <InputElement
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={updateState('username')}
        />
      </FormFieldSet>
      <FormFieldSet>
        <TextAreaElement
          rows="8"
          placeholder="Short bio about you"
          value={state.bio}
          onChange={updateState('bio')}
        />
      </FormFieldSet>
      <FormFieldSet>
        <InputElement
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={updateState('email')}
        />
      </FormFieldSet>
      <FormFieldSet>
        <InputElement
          type="password"
          placeholder="New Password"
          value={state.password}
          onChange={updateState('password')}
        />
      </FormFieldSet>
      <SubmitButton
        type="submit"
        // disabled={settings.inProgress}
      >
        Update Settings
      </SubmitButton>
    </Form>
  )
}

export default SettingsForm
