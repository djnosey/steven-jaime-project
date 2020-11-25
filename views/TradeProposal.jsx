const React = require("react");
const ProductCard = require("./components/ProductCard");
const Layout = require("./Layout");

function TradeProposal(props) {
  console.log(props);
  return (
    <Layout>
      <h3>Trade offer</h3>
      <h4>
        The user {props.proposedProduct.seller.username} wants to trade with you
        his product:
      </h4>
      <ProductCard
        key={props.proposedProduct._id}
        image={props.proposedProduct.image}
        title={props.proposedProduct.name}
        condition={props.proposedProduct.condition}
        category={props.proposedProduct.category}
        id={props.proposedProduct._id}
      />
      <h4>for your</h4>
      <ProductCard
        key={props.yourProduct._id}
        image={props.yourProduct.image}
        title={props.yourProduct.name}
        condition={props.yourProduct.condition}
        category={props.yourProduct.category}
        id={props.yourProduct._id}
      />
      <h4>Do you accept the trade?</h4>

      <form
        action={`/transaction/tradeDone?proposedproduct=${props.proposedProduct._id}&yourproduct=${props.yourProduct._id}`}
        method="POST"
      >
        <button className="formButton">yes</button>
      </form>
      <form
        action={`/transaction/tradeRejected?proposedproduct=${props.proposedProduct._id}&yourproduct=${props.yourProduct._id}`}
        method="POST"
      >
        <button className="formButton">no</button>
      </form>
    </Layout>
  );
}

module.exports = TradeProposal;
