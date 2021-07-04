import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

function Login() {
  const dispatch = useDispatch();
  const usernameInput = useRef()
  const passwordInput = useRef()
  const username = useSelector(state => state.username)
  const email = useSelector (state => state.email)
  const password = useSelector (state => state.password);

  async function sendAnswer(e) {
    e.preventDefault();
const username = usernameInput.current.value
const password = passwordInput.current.value 

const response = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify({username, password})
      })
      const result = await response.json(); 
  
      dispatch({ type: "LOGIN", payload: result 
    })
    usernameInput.current.value = '';
    passwordInput.current.value = '';

  }
  return (
    <div className="container">
  <div className="form">

    <form action="/login" method="post" onSubmit={sendAnswer}>
           <div>
        <label>Username:</label>
        <input ref={usernameInput} type="text" name="username" required/>
      </div>
      <div>
        <label>Password:</label>
        <input  ref={passwordInput} type="password" name="password" required/>
      </div>
      {/* <div style="margin-top: 10px;"> */}
        <input className="routeButton" type="submit" value="Log In" />
      {/* </div> */}
    </form>
  </div>
</div>
    // <div classNameName="login-form">
    //   <h3>Login Page</h3>
    //   <form action="/login" method="POST">
    //     <div className="input-group">
    //       <label for="email">Email:</label>
    //       <input type="email" name="email" />
    //     </div>
    //     <div className="input-group">
    //       <label for="password">Password:</label>
    //       <input type="password" name="password" />
    //     </div>
    //     <button>Login</button>
    //   </form>
    //   <a href="/register">Register</a>
    // </div>
  )
}

export default Login
