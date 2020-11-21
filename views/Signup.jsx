const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout title="Signup Page">
      <h1>Sign up</h1>
      <h3>Start trading</h3>
      <form action="/auth/signup" method="POST" enctype="multipart/form-data">
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input
          type="password"
          name="repeatPassword"
          placeholder="re-type password"
        />
        <label>Profile picture</label>
        <input type="file" name="profilepic" />

        <button type="submit">Create an account!</button>
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = Signup;
