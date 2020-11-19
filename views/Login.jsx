const React = require("react");

function Login() {
  return (
    <form action="" method="post">
      <input type="text" name="username" />
      <br />
      <input type="password" name="password" />
      <br />
      <button type="submit">click me</button>
      <div id="errorMessages"></div>
      <p>
        don't have an account?<a href="/auth/signup">click here</a>
      </p>
    </form>
  );
}

module.exports = Login;
