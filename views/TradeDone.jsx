const React = require("react");
const Layout = require("./Layout");

function TradeDone(props) {
  return (
    <Layout>
      <div className="delete-account-container">
        <h3>Congratulations for your trade!</h3>
        <p>
          You can contact <strong>{props.deletedItem.seller.username}</strong>{" "}
          on his phone <strong>{props.deletedItem.seller.phone}</strong> or
          email <strong>{props.deletedItem.seller.email}</strong>.
        </p>

        <a className="underline-link" href="/">
          Go back to Home
        </a>
      </div>
    </Layout>
  );
}

module.exports = TradeDone;
