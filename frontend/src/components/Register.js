import { Link } from 'react-router-dom'
import ListErrors from './ListErrors'
import React, { useEffect, useState } from 'react'
import agent from '../agent'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
  REGISTER,
  REGISTER_PAGE_UNLOADED,
  LOGIN_PAGE_UNLOADED,
} from '../utils/constants/actionTypes'
import { register } from '../services/actions/register'

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
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            <ListErrors errors={auth.errors} />
            <form onSubmit={submitForm(username, email, password)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={changeUsername}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={changeEmail}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={changePassword}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={auth.inProgress}
                >
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
