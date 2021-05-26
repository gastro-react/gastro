import ListErrors from './ListErrors';
import React, {useState, useEffect} from 'react';
import agent from '../agent';
import { useSelector, useDispatch } from 'react-redux';
import SettingsForm from './SettingsForm';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT
} from '../utils/constants/actionTypes';



function Settings () {
	const dispatch = useDispatch();
	const settings = useSelector(state => state.settings)
	const {currentUser} = useSelector(state=> state.common)
	const onClickLogout = () => dispatch({ type: LOGOUT})
	const onSubmitForm = (user) => dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) })
	
	useEffect(()=>{
		return ()=> dispatch({ type: SETTINGS_PAGE_UNLOADED })
	}, [])
	
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>
              <ListErrors errors={settings.errors}/>
              <SettingsForm
                currentUser={currentUser}
                onSubmitForm={onSubmitForm} />
              <hr />
              <button
                className="btn btn-outline-danger"
                onClick={onClickLogout}>
                Or click here to logout.
              </button>

            </div>
          </div>
        </div>
      </div>
    );
}

export default Settings;
