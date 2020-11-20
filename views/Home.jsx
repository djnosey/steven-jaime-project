const React = require("react");
const Layout = require("./Layout");

function Home(props) {
  const products = props.allProducts;
  return (
    <Layout title="Home Page">
      {products.map((product) => {
        return (
          <div>
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <img src={product.image} alt="" />
          </div>
        );
      })}
    </Layout>
  );
}

module.exports = Home;
