import ListErrors from './ListErrors'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SettingsForm from './SettingsForm'
import { SETTINGS_PAGE_UNLOADED, LOGOUT } from '../utils/constants/actionTypes'
import { settingsSave } from '../services/actions/settingsSave'
import { FormPage, FormPageTitle, LogoutButton, HR } from '../ui/formPage'

function Settings() {
  const dispatch = useDispatch()
  const settings = useSelector((state) => state.settings)
  const { currentUser } = useSelector((state) => state.common)
  const onClickLogout = () => dispatch({ type: LOGOUT })
  const onSubmitForm = (user) => dispatch(settingsSave(user))

  useEffect(() => {
    return () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
  }, [])

  return (
    <FormPage>
      <FormPageTitle>Your Settings</FormPageTitle>
      <ListErrors errors={settings.errors} />
      <SettingsForm currentUser={currentUser} onSubmitForm={onSubmitForm} />
      <HR />
      <LogoutButton onClick={onClickLogout}>
        Or click here to logout.
      </LogoutButton>
    </FormPage>
  )
}

export default Settings
