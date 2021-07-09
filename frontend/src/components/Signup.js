import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Signup({setUser}) {
  const dispatch = useDispatch()

  const initForm = { username: '', email: '', password: '' }

  const [formValue, setFormValue] = useState(initForm)

  const onChangeHandler = ({ target }) => {
    const { name, value } = target
    console.log(name, value)
    setFormValue((pre) => ({ ...pre, [name]: value }))
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    setFormValue(initForm)

    const request = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
          })
      // const {user} = await request.json();

    setFormValue(initForm);

  }
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={submitHandler} onChange={onChangeHandler}>
          <div>
            <label>Username:</label>
            <br />
            <input
              type="text"
              name="username"
              value={formValue.username}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input type="text" name="email" value={formValue.email} required  />
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={formValue.password}
              required
            />
          </div>
          {/* <div style="margin-top: 10px"> */}
          <button className="routeButton" type="submit">sIGN UP</button>
          {/* </div> */}
        </form>
      </div>
    </div>
  )
}

export default Signup
