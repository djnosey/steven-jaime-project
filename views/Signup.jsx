const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout title="Signup Page">
      <div className="signUpMainDiv">
        <h1>Sign up</h1>
        <h3>Start trading</h3>
        <form
          className="signUpMainForm"
          action="/auth/signup"
          method="POST"
          enctype="multipart/form-data"
        >
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
          <input
            className="forminput"
            type="password"
            name="repeatPassword"
            placeholder="re-type password"
          />
          <div className="addFile">
            <label className="addProfilePicture">Add a profile picture</label>
            <input type="file" name="profilepic" />
          </div>

          <button id="createAccBtn" className="formButton" type="submit">
            Create an account!
          </button>
          {props.errorMessage ? (
            <h4 className="error-message"> {props.errorMessage} </h4>
          ) : null}
        </form>
      </div>
    </Layout>
  );
}

module.exports = Signup;
