const React = require("react");
const ProductCard = require("./components/ProductCard");
const Layout = require("./Layout");

function Home(props) {
  const products = props.allProducts;
  return (
    <Layout title="Home Page">
      {props.nothingFound ? (
        <div className="nothingFoundContainer">
          <i id="nothingFoundIcon" class="far fa-meh"></i>
          <h3>sorry no results matched that search</h3>
        </div>
      ) : null}
      <div className="mainHomeContainer">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  );
}

module.exports = Home;
