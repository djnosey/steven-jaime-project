const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout>
      <h1>Sign up</h1>
      <h3>Start trading</h3>
      <form action="/auth/signup" method="post">
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input
          type="password"
          name="repeatPassword"
          placeholder="re-type password"
        />
        <button type="submit">Create an account!</button>
        <div id="errorMessages">{props.errorMessage}</div>
      </form>
    </Layout>
  );
}

module.exports = Signup;
