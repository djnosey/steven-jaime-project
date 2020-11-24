const React = require("react");
const Layout = require("./Layout");
const ProductCard = require("./components/ProductCard");

function ProductDetails(props) {
  let myProduct = false;

  if (props.currentUser && props.currentUser.products.length !== 0) {
    props.currentUser.products.forEach((item, index) => {
      if (item == props.product._id) {
        myProduct = true;
      }
    });
  }

  console.log("myProduct", myProduct);
  return (
    <Layout>
      <img className="productDetailsImage" src={props.product.image} alt="" />
      <h1>{props.product.name}</h1>
      <h3>More information</h3>
      <h4>{props.product.description}</h4>
      <h3>seller info</h3>
      <h3>{props.product.seller.username}</h3>
      <div>
        {props.loggedIn ? (
          <a href={`/transaction/TradeView/${props.product._id}`}>Trade</a>
        ) : (
          <a href="/auth/login">Trade</a>
        )}
      </div>

      <div>
        {myProduct ? (
          <form action={`/product/delete/${props.product._id}`} method="POST">
            <button>delete this item</button>
          </form>
        ) : null}
      </div>

      <h3>more from this user</h3>
      <div className="productPageCardsContainer">
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
      </div>
    </Layout>
  );
}

module.exports = ProductDetails;
