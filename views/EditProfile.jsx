const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
  return (
    <Layout>
      <h2>Edit Profile</h2>
      <h3>{props.actualUser.username}</h3>
      <img src={props.actualUser.image} alt="" />
      <form
        action={`/user/editprofile?userid=${props.actualUser._id}`}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Change Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          defaultValue={props.actualUser.username}
        />
        <label>Change Phone Number:</label>
        <input
          type="number"
          name="phone"
          placeholder="653 622 489"
          defaultValue={props.actualUser.phone}
        />
        <label>Change profile picture</label>
        <input className="formButton" type="file" name="profilepic" />
        <button className="formButton" type="submit">
          Save
        </button>
      </form>

      <form
        action={`/user/delete?userid=${props.actualUser._id}`}
        method="POST"
      >
        <button type="submit">Delete Profile</button>
      </form>

      <a href="/user/profile">Back to profile</a>
    </Layout>
  );
}

module.exports = EditProfile;
