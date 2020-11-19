const React = require("react");

function Signup() {
  return (
    <form action="" method="post">
      <input type="text" name="username" />
      <br />
      <input type="password" name="password" />
      <br />
      <input type="password" name="repeatPassword" />
      <button type="submit">click me</button>
      <div id="errorMessages"></div>
    </form>
  );
}

module.exports = Signup;
