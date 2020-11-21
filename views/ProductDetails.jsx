const React = require("react");
const Layout = require("./Layout");
const ProductCard = require("./components/ProductCard");

function ProductDetails(props) {
  return (
    <Layout>
      <img className="productDetailsImage" src={props.product.image} alt="" />
      <h1>{props.product.name}</h1>
      <h3>More information</h3>
      <h4>{props.product.description}</h4>
      <h3>seller info</h3>
      <h3>{props.product.seller.username}</h3>
      {props.loggedIn ? <p> user is logged in</p> : null}
      <h3>more from this user</h3>
      {props.returnedSeller.products.map((item, index) => {
        return (
          <ProductCard
            key={index}
            image={item.image}
            title={item.name}
            condition={item.condition}
            category={item.category}
            id={item._id}
          />
        );
      })}
    </Layout>
  );
}

module.exports = ProductDetails;