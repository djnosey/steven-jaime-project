const React = require("react");
const Layout = require("./Layout");

function DeleteProfile(props) {
  return (
    <Layout>
      <h3>Delete Account</h3>
      <p>
        Are you sure you want to delete your account {props.actualUser.username}
        ? This will permanently erase your profile and all your products.
      </p>
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
