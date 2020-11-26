const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout>
      <div className="login-container">
        <h1>Log In</h1>
        <form id="login-form" action="/auth/login" method="POST">
          <input
            className="forminput"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className="forminput"
            type="password"
            name="password"
            placeholder="password"
          />
          <button id="login-button" className="formButton" type="submit">
            Log In
          </button>
        </form>
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage}</div>
        ) : null}
        <p>
          Don't have an account? <a href="/auth/signup">Click here</a>
        </p>
      </div>
    </Layout>
  );
}

module.exports = Login;
