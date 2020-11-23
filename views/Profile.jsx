const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout>
      <div className="mainProfileDiv">
        <h1>{props.actualUser.username}</h1>
        <img src={props.actualUser.image} />
        <button
          className="formButton"
          onclick="location.href='/user/editprofile'"
        >
          Edit profile
        </button>
        <a className="formButton" href="/auth/logout">
          Logout
        </a>
      </div>
    </Layout>
  );
}

module.exports = Profile;
