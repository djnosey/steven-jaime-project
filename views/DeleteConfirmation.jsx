const React = require("react");
const Layout = require("./Layout");

function DeleteProfile(props) {
  return (
    <Layout>
      <div className="delete-account-container">
        <h2>Delete Account</h2>
        <h3>
          Are you sure you want to delete your account{" "}
          {props.actualUser.username}? This will permanently erase your profile
          and all your products.
        </h3>
        <div className="delete-account-buttons">
          <form
            action={`/user/deleteConfirmation?userid=${props.actualUser._id}`}
            method="POST"
          >
            <button className="badactionbutton" type="submit">
              Confirm
            </button>
          </form>
          <a className="underline-link" href="/user/profile">Cancel</a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = DeleteProfile;
