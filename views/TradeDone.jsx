const React = require("react");
const Layout = require("./Layout");

function TradeDone(props) {
  console.log("PROPS STUFF", props);
  return (
    <Layout>
      <h3>Congratulations for your trade!</h3>
      <p>
        You can contact {props.deletedItem.seller.username} on his phone{" "}
        {props.deletedItem.seller.phone} or email{" "}
        {props.deletedItem.seller.email}.
      </p>
      <a href="/">Go back to Home</a>
    </Layout>
  );
}

module.exports = TradeDone;
