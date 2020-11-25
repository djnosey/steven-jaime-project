const React = require("react");
const Layout = require("./Layout");

function AddProduct(props) {
  console.log(props);
  return (
    <Layout>
      <h2>Great choice {props.username} List your Product</h2>
      <form
        method="POST"
        encType="multipart/form-data"
        action={`/product/addproduct/${props._id}`}
      >
        <input name="name" type="text" placeholder="name of item" required />
        <label className="formButton" for="addproductphoto">
          Add an image of your product
        </label>
        <input
          id="addproductphoto"
          className="formButton"
          type="file"
          name="productPic"
          required
        />

        <label>Category</label>
        <select name="category" id="">
          <option value="Electronics">Electronics</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Baby">Baby</option>
          <option value="Home">Home</option>
          <option value="Hobbies">Hobbies</option>
          <option value="Clothing">Clothing</option>
          <option value="Sports">Sports</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Christmas">Christmas</option>
        </select>
        <textarea
          placeholder="description of product"
          name="description"
          id=""
          cols="30"
          rows="10"
          required
        ></textarea>
        <label>Item condition</label>
        <select name="condition" id="">
          <option value="New">New</option>
          <option value="Nearly new">Nearly new</option>
          <option value="Used">Used</option>
          <option value="Broken/for parts">Broken/for parts</option>
        </select>
        <button className="formButton" type="submit">
          Upload
        </button>
      </form>
    </Layout>
  );
}

module.exports = AddProduct;
