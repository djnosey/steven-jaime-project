const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout>
      <form action="/auth/login" method="post">
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <button type="submit">Click me</button>
        <div id="errorMessages"></div>
        <p>
          Don't have an account?<a href="/auth/signup">Click here</a>
        </p>
      </form>
    </Layout>
  );
}

module.exports = Login;
