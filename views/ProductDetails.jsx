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
      <h2>{props.product.name}</h2>
      {/* <h3>Description</h3> */}
      <p>{props.product.description}</p>
      <div>
        <form action="`/transaction/TradeView/${props.product._id}`">
          {!myProduct ? (
            <button className="goodactionbutton" type="submit">
              Trade this item
            </button>
          ) : null}
        </form>
      </div>

      <div>
        {myProduct ? (
          <form action={`/product/delete/${props.product._id}`} method="POST">
            <button className="badactionbutton">Delete this item</button>
          </form>
        ) : null}
      </div>
      <h3>Seller's information</h3>
      <div className="sellersinfodiv">
        <img className="sellerimg" src={props.product.seller.image} />
        <h4>{props.product.seller.username}</h4>
      </div>

      <h3>More products from {props.product.seller.username}</h3>
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
