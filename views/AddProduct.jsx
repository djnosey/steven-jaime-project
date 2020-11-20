const React = require("react");
const Layout = require("./Layout");

function AddProduct() {
  return (
    <Layout>
      <h2>List your Product</h2>
      <form encType="multipart/form-data" action="">
        <input type="text" placeholder="name of item" />
        <input type="file" name="productPic" />

        <br />
        <label>category</label>
        <select name="" id="">
          <option value="">Electronics</option>
          <option value="">Home</option>
          <option value="">Hobbies</option>
        </select>
        <br />
        <textarea
          placeholder="description of product"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <label>condition of item</label>
        <select name="" id="">
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
