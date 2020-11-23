const React = require("react");
const ProductCard = require("./components/ProductCard");
const Layout = require("./Layout");
const { PromiseProvider } = require("mongoose");

function TradeView(props) {
  return (
    <Layout>
      <h3>You want to trade?</h3>
      <ProductCard
        id={props.currentProduct._id}
        image={props.currentProduct.image}
        title={props.currentProduct.name}
        condition={props.currentProduct.condition}
        category={props.currentProduct.category}
      />
      <h3>Choose your product to trade</h3>
      <form
        action={`/transaction/TradeView/${props.currentProduct._id}`}
        method="POST"
      >
        <select name="offeredProduct">
          {props.tradeUser.products.map((item, index) => {
            {
              console.log("item", item);
            }
            return <option value={item._id}>{item.name}</option>;
          })}
        </select>
        <button type="submit">Offer</button>
      </form>
    </Layout>
  );
}

module.exports = TradeView;
