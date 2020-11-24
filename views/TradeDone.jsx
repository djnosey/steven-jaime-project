const React = require("react");
const Layout = require("./Layout");

function TradeDone(props) {
  console.log("PROPS STUFF", props);
  return (
    <Layout>
      <h3>Congratulations for your trade!</h3>
      <a href="/">GO HOME!!!</a>
      <p>
        you can contact {props.returnedProduct.seller.username} on his phone{" "}
        {props.returnedProduct.seller.phone} or email
        {props.returnedProduct.seller.email}
      </p>
    </Layout>
  );
}

module.exports = TradeDone;
