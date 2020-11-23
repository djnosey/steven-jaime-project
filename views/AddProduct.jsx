const React = require("react");
const Layout = require("./Layout");

function AddProduct(props) {
  return (
    <Layout>
      <h2>great choice {props.username} List your Product</h2>
      <form
        method="POST"
        encType="multipart/form-data"
        action={`/product/addproduct/${props._id}`}
      >
        <input name="name" type="text" placeholder="name of item" />
        <label className="formButton" for="addproductphoto">
          add an image of your product
        </label>
        <input
          id="addproductphoto"
          className="formButton"
          type="file"
          name="productPic"
        />

        <label>category</label>
        <select name="category" id="">
          <option value="Electronics">Electronics</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Baby">Baby</option>
          <option value="Home">Home</option>
          <option value="Games & Hobbies">Games & Hobbies</option>
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
        ></textarea>
        <label>condition of item</label>
        <select name="condition" id="">
          <option value="New">New</option>
          <option value="Nearly new">Nearly new</option>
          <option value="Used">Used</option>
          <option value="Broken/for parts">Broken/for parts</option>
        </select>
        <button className="formButton" type="submit">
          Trade!!
        </button>
      </form>
    </Layout>
  );
}

module.exports = AddProduct;
