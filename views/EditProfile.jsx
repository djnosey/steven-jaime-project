const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
  return (
    <Layout>
      <h2>Edit Profile</h2>
      <h3>{props.actualUser.username}</h3>
      <img src="" alt="" />
      <form
        action={`/user/editprofile?userid=${props.actualUser._id}`}
        method="POST"
      >
        <label>Change Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          defaultValue={props.actualUser.username}
        />
        <button type="submit">Save</button>
      </form>
      <form action="user/delete" method="POST">
        <button type="submit">Delete Profile</button>
      </form>
    </Layout>
  );
}

module.exports = EditProfile;
