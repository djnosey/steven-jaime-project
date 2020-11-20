const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout>
      <div>
        <h3>{props.actualUser.username}</h3>
      </div>
    </Layout>
  );
}

module.exports = Profile;
