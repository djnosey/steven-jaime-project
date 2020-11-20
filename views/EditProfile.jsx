// const React = require("react");
// const Layout = require("./Layout");

// function EditProfile(props) {
//   return (
//     <Layout>
//       <h2>Edit Profile</h2>
//       <h3>{props.oneUser._id}</h3>
//       <img src="" alt="" />
//       <form action={`/user/edit?userid=${props.oneUser._id}`} method="POST">
//         <input
//           type="text"
//           name="username"
//           placeholder="username"
//           defaultValue={props.oneUser.name}
//         />
//         <br />
//         <input type="password" name="password" placeholder=" password" />
//         <br />
//         <input
//           type="password"
//           name="repeatPassword"
//           placeholder="re-type password"
//         />
//         <button type="submit">Save</button>
//       </form>
//       <form action="user/delete" method="POST">
//         <button type="submit">Delete Profile</button>
//       </form>
//     </Layout>
//   );
// }

// module.exports = EditProfile;
