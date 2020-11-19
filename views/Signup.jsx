const React = require("react");

function Signup(props) {
  return (
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
  );
}

module.exports = Signup;
