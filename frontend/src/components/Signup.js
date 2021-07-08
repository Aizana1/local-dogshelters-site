import React from 'react'

function Signup() {
  return (
    <div className="container">
  <div className="form">
    <form action="/signup" method="post">
          <div>
        <label>Username:</label><br />
        <input type="text" name="username" required />
      </div>
      <div>
        <label>Email:</label><br />
        <input type="text" name="email" required />
      </div>
      <div>
        <label>Password:</label><br />
        <input type="password" name="password" required />
      </div>
            {/* <div style="margin-top: 10px"> */}
        <input className="routeButton" type="submit" value="Sign Up" />
      {/* </div> */}
    </form>
  </div>
</div>
  )
}

export default Signup
