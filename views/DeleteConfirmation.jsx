const React = require("react");
const Layout = require("./Layout");

function DeleteProfile(props) {
  return (
    <Layout>
      <h3>
        Are you sure you want to delete your profile {props.actualUser.username}
        ?
      </h3>
      <form
        action={`/user/deleteConfirmation?userid=${props.actualUser._id}`}
        method="POST"
      >
        <button type="submit">Confirm</button>
      </form>
      <a href="/user/profile">Cancel</a>
    </Layout>
  );
}

module.exports = DeleteProfile;
