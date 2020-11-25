const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout>
      <form action="/auth/login" method="POST">
        <input
          className="forminput"
          type="text"
          name="username"
          placeholder="username"
        />
        <br />
        <input
          className="forminput"
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <button className="formButton" type="submit">
          Log In
        </button>
        <div id="errorMessages">{props.errorMessage}</div>
      </form>
      {props.errorMessage ? (
        <div className="error-message"> {props.errorMessage}</div>
      ) : null}
      <p>
        Don't have an account? <a href="/auth/signup">Click here</a>
      </p>
    </Layout>
  );
}

module.exports = Login;
