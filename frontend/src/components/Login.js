import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
  const dispatch = useDispatch()
 //  const user = useSelector((state) => state.user)
  const history = useHistory()
  const initForm = { username: '', password: '' }

  const [formValue, setFormValue] = useState(initForm)

  const onChangeHandler = ({ target }) => {
    const { name, value } = target
    setFormValue((pre) => ({ ...pre, [name]: value }))
  }

  async function sendAnswer(e) {
    e.preventDefault()

    setFormValue(initForm)
    // console.log(formValue)

    const request = await fetch(`http://localhost:4000/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValue),
    })
     const {user} = await request.json();
    console.log(user)
    // const { user.username } = await request.json()
      dispatch({ type: 'INIT_USER', payload: user.username  })

    // console.log(username)
    setFormValue(initForm)
    // setUser(username)
    history.push('/dashboard')
  }
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={sendAnswer} onChange={onChangeHandler}>
          <div>
            <label>Username:</label>
            <input
              value={formValue.username}
              type="text"
              name="username"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              value={formValue.password}
              type="password"
              name="password"
              required
            />
          </div>
          {/* <div style="margin-top: 10px;"> */}
          <input className="routeButton" type="submit" value="Log In" />
          {/* </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login
