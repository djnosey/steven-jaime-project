const React = require("react");
const Layout = require("./Layout");

function EditProfile(props) {
  return (
    <Layout>
      <div className="edit-profile-container">
        <h2>Edit Profile</h2>
        <div className="edit-image-name">
          <img className="sellerimg" src={props.actualUser.image} alt="" />
          <h3>{props.actualUser.username}</h3>
        </div>
        <form
          id="edit-info-form"
          action={`/user/editprofile?userid=${props.actualUser._id}`}
          method="POST"
          encType="multipart/form-data"
        >
          <input
            className="forminput"
            type="text"
            name="username"
            placeholder="username"
            defaultValue={props.actualUser.username}
          />
          <input
            className="forminput"
            type="number"
            name="phone"
            placeholder="653 622 489"
            defaultValue={props.actualUser.phone}
          />
          <div className="change-pic-div">
            <div className="addfile">
              <label className="addProfilePicture">
                Change profile picture
              </label>
              <input type="file" name="profilepic" />
            </div>
          </div>
          <button className="formButton" type="submit">
            Save
          </button>
        </form>

        <div className="edit-profile-buttons">
          <form
            action={`/user/delete?userid=${props.actualUser._id}`}
            method="POST"
          >
            <button className="badactionbutton" type="submit">
              Delete Account
            </button>
          </form>

          <a className="underline-link" href="/user/profile">Back to your profile</a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = EditProfile;
