const React = require("react");
const Layout = require("./Layout");

function AddProduct(props) {
  console.log("props object", props);
  return (
    <Layout>
      <h2>great choice {props.username} List your Product</h2>
      <form
        method="POST"
        encType="multipart/form-data"
        action={`/product/addproduct/${props._id}`}
      >
        <input name="name" type="text" placeholder="name of item" />
        <br />
        <label>add an image of your product</label>
        <input type="file" name="productPic" />

        <br />
        <label>category</label>
        <select name="category" id="">
          <option value="">Electronics</option>
          <option value="">Home</option>
          <option value="">Hobbies</option>
        </select>
        <br />
        <textarea
          placeholder="description of product"
          name="description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <label>condition of item</label>
        <select name="condition" id="">
          <option value="">New</option>
          <option value="">Nearly new</option>
          <option value="">Used</option>
          <option value="">Broken/for parts</option>
        </select>
        <button type="submit">Trade!!</button>
      </form>
    </Layout>
  );
}

module.exports = AddProduct;
