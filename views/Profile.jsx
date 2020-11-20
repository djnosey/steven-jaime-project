const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout>
      <div>
        <h3>{props.actualUser.username}</h3>
        <img src={props.actualUser.image} />
        <a href="/user/editprofile">Edit profile</a>
        <a href="/auth/logout">Logout</a>
      </div>
    </Layout>
  );
}

module.exports = Profile;
