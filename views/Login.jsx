const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout>
      <form action="/auth/login" method="POST">
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <button className="formButton" type="submit">
          Click me
        </button>
        <div id="errorMessages">{props.errorMessage}</div>
      </form>
      {props.errorMessage ? (
        <div className="error-message"> {props.errorMessage}</div>
      ) : null}
      <p>
        Don't have an account?<a href="/auth/signup">Click here</a>
      </p>
    </Layout>
  );
}

module.exports = Login;
