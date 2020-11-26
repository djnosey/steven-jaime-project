const React = require("react");
const Layout = require("./Layout");
const ProductCard = require("./components/ProductCard");

function ProductDetails(props) {
  let myProduct = false;

  let numberofItems = props.product.seller.products.length;

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
      <h2>{props.product.name}</h2>

      <p id="product-details-p">{props.product.description}</p>
      <div id="product-details-button">
        <form action={`/transaction/TradeView/${props.product._id}`}>
          {!myProduct ? (
            <button className="goodactionbutton" type="submit">
              Trade this item
            </button>
          ) : null}
        </form>
        <div>
          {myProduct ? (
            <form action={`/product/delete/${props.product._id}`} method="POST">
              <button className="badactionbutton">Delete this item</button>
            </form>
          ) : null}
        </div>
      </div>
      <div className="sellersinfodiv">
        <h3>Seller's information</h3>
        <img className="sellerimg" src={props.product.seller.image} />
        <h4>{props.product.seller.username}</h4>
      </div>

      <h3 className="more-products-from">
        More products from {props.product.seller.username}
      </h3>
      <div className="productPageCardsContainer">
        {props.returnedSeller.products.map((item, index) => {
          return (
            <div className="sellersotheritems">
              <ProductCard
                key={index}
                image={item.image}
                title={item.name}
                condition={item.condition}
                category={item.category}
                id={item._id}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = ProductDetails;
