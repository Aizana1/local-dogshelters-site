import React from 'react'

function Signup() {
  return (
    <div class="container">
  <div class="form">
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
        <input class="routeButton" type="submit" value="Sign Up" />
      {/* </div> */}
    </form>
  </div>
</div>
    // <div className="login-form">
     
    //   <h3>Register Page</h3>
    //   <form action="/signup" method="POST">
    //     <div className="input-group">
    //       <label for="username">Username:</label>
    //       <input type="text" name="username" />
    //     </div>
    //     <div className="input-group">
    //       <label for="email">Email:</label>
    //       <input type="email" name="email" />
    //     </div>
    //     <div className="input-group">
    //       <label for="password">Password:</label>
    //       <input type="password" name="password" />
    //     </div>
    //     <button>Register</button>
    //   </form>
    //   <a href="/login">Login</a>
    // </div>
  )
}

export default Signup
