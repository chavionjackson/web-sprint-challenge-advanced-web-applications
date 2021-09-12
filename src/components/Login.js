import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // make a post request to retrieve a token from the api
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( credentials.username || credentials.password === '' ) {
      setError('Username and Password are incorrect')
    }
  };

  // when you have handled the token, navigate to the BubblePage route

  // const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label>Username: </label>
            <input
              onChange={handleChange}
              id="username"
              value={credentials.username}
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              onChange={handleChange}
              id="password"
              value={credentials.password}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button
            id="submit"
            type="submit"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
