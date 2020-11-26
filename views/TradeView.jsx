const React = require("react");
const ProductCard = require("./components/ProductCard");
const Layout = require("./Layout");
const { PromiseProvider } = require("mongoose");

function TradeView(props) {
  return (
    <Layout>
      <div className="trade-view-container">
        <h3>You want to trade?</h3>
        <div className="single-card">
          <ProductCard
            id={props.currentProduct._id}
            image={props.currentProduct.image}
            title={props.currentProduct.name}
            condition={props.currentProduct.condition}
            category={props.currentProduct.category}
          />
        </div>
        <h4 id="trade-view-h4">Choose your product to trade</h4>
        <form
          className="trade-view-form"
          action={`/transaction/TradeView/${props.currentProduct._id}`}
          method="POST"
        >
          <select name="offeredProduct">
            {props.tradeUser.products.map((item, index) => {
              return <option value={item._id}>{item.name}</option>;
            })}
          </select>
          <button className="formButton" type="submit">
            Send offer
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = TradeView;
