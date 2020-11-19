const React = require("react");

function Signup(props) {
  return (
    <form action="/auth/signup" method="post">
      <input type="text" name="username" />
      <br />
      <input type="password" name="password" />
      <br />
      <input type="password" name="repeatPassword" />
      <button type="submit">click me</button>
      <div id="errorMessages">{props.errorMessage}</div>
    </form>
  );
}

module.exports = Signup;
